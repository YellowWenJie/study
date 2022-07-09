package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
)

type IndexData struct {
	Name string
	Age  int
}

func index(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello world"))
}

func indexHtml(w http.ResponseWriter, r *http.Request) {
	var indexData IndexData
	indexData.Name = "黄文杰"
	indexData.Age = 21

	t := template.New("index.html")
	// 拿到当前路径
	path, _ := os.Getwd()
	t, _ = t.ParseFiles(path + "/template/index.html")
	t.Execute(w, indexData)
}

func main() {
	// 程序入口，一个项目 只能有一个入口
	// web 程序，http 协议 ip port
	server := http.Server{
		Addr: "127.0.0.1:8080",
	}
	http.HandleFunc("/", index)
	http.HandleFunc("/index.html", indexHtml)
	if err := server.ListenAndServe(); err != nil {
		log.Panicln(err)
	}

}
