# GoLang

学习博客：`[golang构建http服务 - 多课网 (duoke360.com)](https://duoke360.com/post/83)`



## gin

* 解决`go get -u github.com/gin-gonic/gin`出错，只需要换个代理

  ```
  go env -w GO111MODULE=on
  
  go env -w GOPROXY=https://goproxy.io,direct
  ```

* gin Mode 

  ```go
  /**
  	//	 * 部署的时候一定要记得切换为 生产模式
  	//	 * gin.SetMode(gin.DebugMode) // 设置成开发模式
  	//	 * gin.SetMode(gin.ReleaseMode) // 设置成生产环境模式
  	//	 * gin.SetMode(gin.TestMode) // 设置成测试环境模式
  	//	 **/
  ```

* ```go
  
  func main() {
  
  	app := routers.SetupRouter()
    // 这里加了 http 会报错
    err := app.Run(fmt.Sprintf("http://127.0.0.1: %d", 8080))
  	if err != nil {
  		fmt.Printf("run server failed, err:%v\n", err)
  		return
  	}
  }
  ```

  



