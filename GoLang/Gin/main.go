package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"rear-end/config/db"
	"rear-end/config/migrate"
	"rear-end/config/settings"
	"rear-end/middlewares"
	"rear-end/routers"
	"rear-end/utils"
)

func main() {
	// 读配置文件
	settings.Init()
	// MySQL 初始化
	db.InitDb()
	// Migrate 根据实体结构，反向生成数据表（自动迁移）
	migrate.Migrate()
	// 翻译
	if err := utils.TransInit("zh"); err != nil {
		fmt.Printf("初始化翻译失败, err:%v\n", err)
		return
	}

	// 加载中间件
	router := gin.New()
	router.Use(middlewares.LoggerToFile())
	// 前端
	apiRouter := routers.ApiRouter{}
	apiRouter.InitApiRouter("/api", router)

	err := router.Run(fmt.Sprintf("127.0.0.1: %d", settings.Config.Serve.Port))
	if err != nil {
		fmt.Printf("run server failed, err:%v\n", err)
		return
	}
}
