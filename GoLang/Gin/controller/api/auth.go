package api

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"rear-end/config/settings"
	"rear-end/utils"
	"rear-end/validator"
	"time"
)

type AuthController struct {
}

// Register 注册
func (auth *AuthController) Register(ctx *gin.Context) {
	regForm := forms.RegisterForm{}
	result := utils.Result{
		Code: utils.Success,
		Msg:  "注册成功",
		Data: "",
	}

	// 表单校验
	if err := ctx.ShouldBindJSON(&regForm); err != nil {
		result.Code = utils.RequestError // 请求数据有误
		result.Msg = utils.GetFormError(err)
		ctx.JSON(http.StatusOK, result)
		return
	}

	// 查询是否注册
	user := regForm.BindToModel() // 绑定表单数据到用户
	u := user.GetByEmail()
	if u.Email != "" {
		result.Code = utils.RequestError
		result.Msg = "该邮箱已被注册"
		ctx.JSON(http.StatusOK, result) // 返回 json
		return
	}

	// 创建用户
	if err := user.Create(); err != nil {
		result.Code = utils.ServerError
		result.Msg = "服务器端错误"
		ctx.JSON(http.StatusOK, result) // 返回 json
		return
	}

	ctx.JSON(http.StatusOK, result) // 返回 json

}

// Login 登录
func (auth *AuthController) Login(ctx *gin.Context) {
	loginForm := forms.LoginForm{}
	result := utils.Result{ // 定义 api 返回信息结构
		Code: utils.Success,
		Msg:  "登录成功",
		Data: "",
	}
	if err := ctx.ShouldBindJSON(&loginForm); err != nil { // 表单校验失败
		result.Code = utils.RequestError     // 请求数据有误
		result.Msg = utils.GetFormError(err) // 获取表单错误信息
		ctx.JSON(http.StatusOK, result)      // 返回 json
		return
	}

	user := loginForm.BindToModel() // 绑定表单数据到实体类
	u := user.GetByEmail()          // 根据用户名获取用户
	if u.Email == "" {              // 用户不存在
		result.Code = utils.RequestError
		result.Msg = "不存在该用户"
		ctx.JSON(http.StatusOK, result)
		return
	}

	if !utils.VerifyPwd(u.Password, user.Password) { // 密码错误
		result.Code = utils.RequestError
		result.Msg = "密码错误"
		ctx.JSON(http.StatusOK, result) // 返回 json
		return
	}

	j := utils.NewJWT()
	token, err := j.CreateToken(utils.CustomClaims{
		Email: u.Email,
		Time:  time.Now(),
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Second * time.Duration(settings.Config.Serve.Token_expire_time)).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
	})
	if err != nil { // 异常处理
		result.Code = utils.ServerError
		result.Msg = "服务器端错误"
		ctx.JSON(http.StatusOK, result) // 返回 json
		return
	}
	result.Data = utils.Token{ // 封装 Token 信息
		Token:    token,
		Id:       u.ID,
		Username: u.Username,
		Email:    u.Email,
		Avatar:   u.Avatar,
	}

	ctx.JSON(http.StatusOK, result)
}
