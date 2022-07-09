package utils

// 状态码
const (
	Success      = 200 // 请求成功
	Redirect     = 301 // 重定向
	Forbidden    = 405 // 禁止访问
	RequestError = 400 // 请求数据缺失或者有误
	ServerError  = 500 // 服务器错误
)

// Result RestFulApi 返回信息结构
type Result struct {
	Code int         `json:"code" example:"200"` // 状态码
	Msg  string      `json:"msg" example:"密码错误"` // 提示
	Data interface{} `json:"data"`               // 数据
}

// Token 令牌结构

type Token struct {
	Token string `json:"token"` // 令牌
	//RefreshToken string `json:"refresh_token"`
	Id       uint   `json:"id"`       // 用户 ID
	Username string `json:"username"` // 用户名
	Email    string `json:"email"`    // 邮箱
	Avatar   string `json:"avatar"`   // 头像
}
