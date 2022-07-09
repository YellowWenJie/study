package forms

import "rear-end/serve"

// LoginForm 登录表单
type LoginForm struct {
	Email    string `json:"email" binding:"required,max=30,email" label:"邮箱"`
	Password string `json:"password" binding:"required,min=6,max=20" label:"密码"`
}

// RegisterForm 注册表单
type RegisterForm struct {
	Username string `json:"username" binding:"required,min=3,max=30" label:"用户名"`
	Password string `json:"password" binding:"required,min=6,max=20" label:"密码"`
	Email    string `json:"email" binding:"required,max=30,email" label:"邮箱"`
	Avatar   string `json:"avatar" label:"头像"`
}

func (form LoginForm) BindToModel() serve.User {
	return serve.User{
		Email:    form.Email,
		Password: form.Password,
	}
}

func (form RegisterForm) BindToModel() serve.User {
	return serve.User{
		Email:    form.Email,
		Password: form.Password,
	}
}
