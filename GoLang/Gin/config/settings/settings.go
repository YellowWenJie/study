package settings

import (
	"fmt"
	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

var Config = new(AppConfig)

type AppConfig struct {
	MySQL *MySQLConfig `yaml:"mysql"`
	Serve *ServeConfig `yaml:"serve"`
}

type ServeConfig struct {
	Name              string `yaml:"name"`
	Mode              string `yaml:"mode"`
	Port              int    `yaml:"port"`
	Version           string `yaml:"version"`
	Start_time        string `yaml:"start_time"`
	Token_expire_time int    `yaml:"token_expire_time"`
}

type MySQLConfig struct {
	Host        string `yaml:"host"`
	Port        int    `yaml:"port"`
	User        string `yaml:"user"`
	Password    string `yaml:"password"`
	Dbname      string `yaml:"dbname"`
	MaxIdleConn int    `yaml:"max_idle_conn"`
	MaxOpenConn int    `yaml:"max_open_conn"`
}

func Init() error {
	viper.SetConfigType("yaml")
	viper.SetConfigFile("./config/config.yaml")

	viper.WatchConfig()
	viper.OnConfigChange(func(in fsnotify.Event) {
		fmt.Println("夭寿啦~配置文件被人修改啦...")
		viper.Unmarshal(&Config)
	})

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("ReadInConfig failed, err: %v", err))
	}

	if err := viper.Unmarshal(&Config); err != nil {
		panic(fmt.Errorf("unmarshal to Conf failed, err:%v", err))
	}

	return err
}
