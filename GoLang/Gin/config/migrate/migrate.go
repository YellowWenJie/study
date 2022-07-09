package migrate

import (
	"rear-end/config/db"
	"rear-end/serve"
)

func Migrate() {
	err := db.Db.AutoMigrate(&serve.User{})
	if err != nil {
		panic("创建表失败")
	} else {
		print("创建表成功")
	}
}
