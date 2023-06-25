package kantoku

import (
	"context"
	"kantoku/common/data"
	"kantoku/framework/future"
	taskContext "kantoku/framework/plugins/context"
	"kantoku/framework/plugins/depot/deps"
	"kantoku/framework/plugins/meta"
	"kantoku/framework/plugins/status"
	"kantoku/kernel"
)

type Task struct {
	id              string
	kantoku         *Kantoku
	parametrization Parametrization
	raw             kernel.Task
	cachedRaw       bool
	cachedParam     bool
}

func (task *Task) ID() string {
	return task.id
}

func (task *Task) Status(ctx context.Context) (status.Status, error) {
	info, err := task.Meta(ctx)
	if err != nil {
		return "", err
	}

	var value status.Status
	err = info.Get("status").Load(ctx, &value)

	if err == data.NotFoundErr {
		return status.Unknown, nil
	}

	return value, err
}

func (task *Task) Context(ctx context.Context) (taskContext.Context, error) {
	info, err := task.Meta(ctx)
	if err != nil {
		return taskContext.Empty, err
	}

	var id string
	err = info.Get("context").Load(ctx, &id)

	if err == data.NotFoundErr {
		return taskContext.Empty, nil
	}

	return task.kantoku.contexts.Get(ctx, id)
}

func (task *Task) Meta(ctx context.Context) (meta.Meta, error) {
	return task.kantoku.meta.Get(ctx, task.ID())
}

func (task *Task) Dependencies(ctx context.Context) ([]deps.Dependency, error) {
	groupID, err := task.kantoku.depot.GroupTaskBimap().ByKey(ctx, task.ID())
	if err != nil {
		return nil, err
	}

	group, err := task.kantoku.depot.Deps().Group(ctx, groupID)
	if err != nil {
		return nil, err
	}

	return group.Dependencies, err
}

func (task *Task) Static(ctx context.Context) ([]byte, error) {
	err := task.loadParametrization(ctx)
	if err != nil {
		return nil, err
	}

	return task.parametrization.Static, nil
}

func (task *Task) Inputs(ctx context.Context) ([]future.ID, error) {
	err := task.loadParametrization(ctx)
	if err != nil {
		return nil, err
	}

	return task.parametrization.Inputs, nil
}

func (task *Task) Outputs(ctx context.Context) ([]future.ID, error) {
	err := task.loadParametrization(ctx)
	if err != nil {
		return nil, err
	}

	return task.parametrization.Outputs, nil
}

func (task *Task) Type(ctx context.Context) (string, error) {
	err := task.loadRaw(ctx)
	if err != nil {
		return "", err
	}

	return task.raw.Type, nil
}

func (task *Task) loadParametrization(ctx context.Context) error {
	if task.cachedParam {
		return nil
	}
	if err := task.loadRaw(ctx); err != nil {
		return err
	}

	param, err := task.kantoku.parametrizationCodec.Decode(task.raw.Data)
	if err != nil {
		return err
	}

	task.cachedParam = true
	task.parametrization = param
	return nil
}

func (task *Task) loadRaw(ctx context.Context) error {
	if task.cachedRaw {
		return nil
	}
	raw, err := task.kantoku.kernel.Task(task.id).Instance(ctx)
	if err != nil {
		return err
	}
	task.raw = raw
	return nil
}