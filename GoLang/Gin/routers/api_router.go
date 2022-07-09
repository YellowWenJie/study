package routers

import (
	"github.com/gin-gonic/gin"
	"rear-end/controller/api"
)

type ApiRouter struct {
}

func (a *ApiRouter) InitApiRouter(rootPath string, router *gin.Engine) {
	authController := api.AuthController{}

	authApiRouter := router.Group(rootPath)
	{
		authApiRouter.POST("/auth/register", authController.Register)
		authApiRouter.POST("/auth/login", authController.Login)
	}
}
