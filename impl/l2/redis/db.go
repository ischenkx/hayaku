package redis

import "github.com/redis/go-redis/v9"

type DB struct {
	client redis.UniversalClient
}
