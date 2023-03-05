package kantoku

import (
	"kantoku/common/data/kv"
	"kantoku/core/event"
	"kantoku/framework/cell"
	"kantoku/framework/depot"
)

type Config struct {
	Events event.Bus
	Depot  *depot.Depot
	Tasks  kv.Database[Task]
	Cells  cell.Storage[[]byte]
}
