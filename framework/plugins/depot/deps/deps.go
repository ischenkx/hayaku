package deps

import (
	"context"
	"kantoku/common/data/transactional"
)

type Deps interface {
	Dependency(ctx context.Context, id string) (Dependency, error)
	Resolve(ctx context.Context, id string) error
	Group(ctx context.Context, id string) (Group, error)
	NewDependency(ctx context.Context) (Dependency, error) // creates a single dependency

	// NewGroup generates id for a group, which then can be passed to SaveGroup
	NewGroup(ctx context.Context) (string, error)
	// InitGroup saves group with given id and dependencies to Deps
	InitGroup(ctx context.Context, groupId string, depIds ...string) error
	Ready(ctx context.Context) (<-chan transactional.Object[string], error)
}