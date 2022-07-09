package db

import (
	"database/sql"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"rear-end/config/settings"
)

// Db 数据库对象
var Db *gorm.DB

// InitDb 初始化数据库
func InitDb() {
	var err error

	MysqlConfig := settings.Config.MySQL
	// 获取数据库连接
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		MysqlConfig.User,
		MysqlConfig.Password,
		MysqlConfig.Host,
		MysqlConfig.Port,
		MysqlConfig.Dbname,
	)

	sqlDB, _ := sql.Open("mysql", dsn)
	sqlDB.SetMaxIdleConns(MysqlConfig.MaxIdleConn)
	sqlDB.SetMaxOpenConns(MysqlConfig.MaxOpenConn)

	Db, err = gorm.Open(mysql.New(mysql.Config{
		Conn:              sqlDB,
		DefaultStringSize: 191, // 一定要加，不然用 string 的时候 是 longtext
	}), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true, // 逻辑外键.
	})
	if err != nil {
		fmt.Println("数据库连接错误：", err.Error())
	}

}
