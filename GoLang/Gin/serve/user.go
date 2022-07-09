package serve

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"rear-end/config/db"
	"rear-end/utils"
)

// User 用户
type User struct {
	gorm.Model
	Username string `gorm:"not null" json:"username"`    // 用户名
	Email    string `gorm:"not null" json:"email"`       // 邮箱
	Password string `json:"password"`                    // 密码
	Phone    int    `gorm:"default: null;" json:"phone"` // 手机号码
	Avatar   string `json:"avatar"`                      // 头像
}

// GetAll 获取所有用户
func (user User) GetAll() ([]User, error) {
	var users []User
	err := db.Db.Find(&users).Error
	if gorm.IsRecordNotFoundError(err) {
		err = nil
	}

	return users, err
}

// Create 创建用户
func (user User) Create() error {
	hashPassWord, err := utils.EncryptPwd(user.Password) // 加密密码
	if err != nil {
		return err
	}

	user.Password = hashPassWord
	return db.Db.Create(&user).Error
}

// GetByEmail 根据 email 获取用户
func (user User) GetByEmail() User {
	var u User
	if err := db.Db.Where("`email` = ?", user.Email).
		First(&u).Error; err != nil {
		fmt.Println("GetByEmail 查询出错")
	}

	return u
}
