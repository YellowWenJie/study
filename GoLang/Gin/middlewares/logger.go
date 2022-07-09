package middlewares

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"os"
	"path"
	"time"
)

// 检查并且创建日志文件夹
func createFolder(logFilePath string) {
	if err := os.MkdirAll(logFilePath, 0777); err != nil {
		fmt.Println("文件夹创建失败")
		panic(err)
	}
}

// |创建| 打开 日志文件
func createLogFile(logFilePath, filenameFormat string) *os.File {
	logFileName := filenameFormat + ".log"
	fileName := path.Join(logFilePath, logFileName)

	// 检查是否能够成功创建日志文件
	checkFile := func(filename string) {
		// 以时间去命名日志文件
		// 先去判断文件名字是否合法
		if _, err := os.Stat(filename); err != nil {
			if _, err := os.Create(filename); err != nil {
				fmt.Println("打开文件失败")
				panic(err)
			}
		}
	}
	checkFile(fileName)
	src, err := os.OpenFile(fileName, os.O_APPEND|os.O_WRONLY, os.ModeAppend)
	if err != nil {
		panic(err)
	}
	return src
}

// 获取日志写入的 logger
func getLogger() (*logrus.Logger, func()) {
	logFilePath := ""
	if dir, err := os.Getwd(); err == nil {
		logFilePath = dir + "/logs/"
	}
	// 创建日志文件夹
	createFolder(logFilePath)
	filenameFormat := time.Now().Format("2006-01-02")
	src := createLogFile(logFilePath, filenameFormat)

	logger := logrus.New()
	logger.Out = src
	logger.SetLevel(logrus.DebugLevel)

	logger.SetFormatter(&logrus.TextFormatter{
		TimestampFormat: "2006-01-02 15:04:05",
	})

	// 检查更新当前的时间
	// 还存在个BUG 实现了日志文件的切换 但是文件流不能被关闭，
	return logger, func() {
		newFileNameFormat := time.Now().Format("2006-01-02")
		if newFileNameFormat != filenameFormat {
			filenameFormat = newFileNameFormat
			src.Close()
			newSrc := createLogFile(logFilePath, filenameFormat)
			logger.Out = newSrc
		}
	}
}

// 日志的中间件
func LoggerToFile() gin.HandlerFunc {
	logger, changeSrc := getLogger()
	return func(c *gin.Context) {
		fmt.Println("收到请求")
		// 检查日期判断是否切换写入的日志文件
		changeSrc()

		// 开始的时间
		startTime := time.Now()

		// 处理请求
		c.Next()
		// 处理请求
		endTime := time.Now()
		// 执行时间
		latencyTime := endTime.Sub(startTime)

		reqMethod := c.Request.Method
		// 请求路由
		reqUri := c.Request.RequestURI
		// 状态码
		statusCode := c.Writer.Status()

		// 请求IP
		clientIp := c.ClientIP()

		fmt.Println("code:", statusCode, "等待时间:", latencyTime, "ip:", clientIp, reqMethod, reqUri, clientIp)

		// 日志的格式
		logger.Infof("| %3d | %13v | %15s | %s | %s | %s |",
			statusCode,
			latencyTime,
			clientIp,
			reqMethod,
			reqUri,
			clientIp,
		)
	}
}
