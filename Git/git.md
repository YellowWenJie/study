<h1 align = 'center'>Git</h1>

##### 强行拉取云端覆盖本地

```
git fetch --all
git reset --hard origin/master
git pull
```
##### Mac 安装 git 配置 ssh 全流程

1. 安装 Xcode

2. 创建ssh key、配置git

   `git config --global user.name "yellowwenjie"`     

   `git config --global user.email "yellowwenjie@gmail.com"`

  3. 通过终端命令创建ssh key,无脑回车

     `ssh-keygen -t rsa -C "yellowwenjie@gmail.com"`

  4. 打开 `ssh/id_rsa.pub` 复制里面的内容

  5. 打开 github 点击 `Settings` 点击 `SSH and GPG keys` 输入刚刚复制的内容

  6. 验证链接 `ssh -T git@github.com `


##### 本地切换到远程分支

`git branch -a` 查看所有分支

* `git checkout origin/远程分支名` 切换到远程分支
* `git checkout -b 本地分支名 origin/远程分支名`本地创建分支并切换到该分支
