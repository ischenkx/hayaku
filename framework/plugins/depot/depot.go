package depot

import (
	"context"
	"fmt"
	"kantoku/common/data/bimap"
	"kantoku/common/data/transactional"
	"kantoku/framework/plugins/depot/deps"
	"kantoku/kernel"
	"kantoku/kernel/platform"
)

type PluginData struct {
	Dependencies []string
}

type Depot struct {
	deps           deps.Deps
	groupTaskBimap bimap.Bimap[string, string]
	inputs         platform.Inputs
}

func New(deps deps.Deps, groupTaskBimap bimap.Bimap[string, string], inputs platform.Inputs) *Depot {
	return &Depot{
		deps:           deps,
		groupTaskBimap: groupTaskBimap,
		inputs:         inputs,
	}
}

func (depot *Depot) Deps() deps.Deps {
	return depot.deps
}

func (depot *Depot) GroupTaskBimap() bimap.Bimap[string, string] {
	return depot.groupTaskBimap
}

func (depot *Depot) Write(ctx context.Context, ids ...string) error {
	// actually it breaks interface
	if len(ids) != 1 {
		return fmt.Errorf("multiple ids are not supported")
	}
	taskId := ids[0]

	data := kernel.GetPluginData(ctx).GetWithDefault("dependencies", &PluginData{}).(*PluginData)

	group, err := depot.Deps().NewGroup(ctx)
	if err != nil {
		return fmt.Errorf("failed to make group id: %w", err)
	}

	if err := depot.groupTaskBimap.Save(ctx, group, taskId); err != nil {
		return fmt.Errorf("failed to save the (group, task) pair in the bimap: %w", err)
	}

	if err := depot.Deps().InitGroup(ctx, group, data.Dependencies...); err != nil {
		returningErr := fmt.Errorf("failed to make a dependency group: %s", err)
		if err := depot.groupTaskBimap.DeleteByKey(ctx, group); err != nil {
			return fmt.Errorf("%w\nalso failed to remove (group, task) pair from the bimap: %w",
				returningErr, err)
		}
		return returningErr
	}

	return nil
}

func (depot *Depot) Read(ctx context.Context) (<-chan transactional.Object[string], error) {
	return depot.inputs.Read(ctx)
}