---
title: "30 Docker"
description: "30-docker"
keywords: "30,docker"
date: 2026-02-16T23:08:58+08:00
lastmod: 2026-02-16T23:08:58+08:00
tags:
# 原文作者
# Post's origin author name
#author:
# 原文链接
# Post's origin link URL
#link:
# 图片链接，用在open graph和twitter卡片上
# Image source link that will use in open graph and twitter card
#imgs:
# 在首页展开内容
# Expand content on the home page
#expand: true
# 外部链接地址，访问时直接跳转
# It's means that will redirecting to external links
#extlink:
# 在当前页面关闭评论功能
# Disabled comment plugins in this post
#comment:
#  enable: false
# 关闭文章目录功能
# Disable table of content
#toc: false
# 绝对访问路径
# Absolute link for visit
#url: "30-docker.html"
# 开启文章置顶，数字越小越靠前
# Sticky post set-top in home page and the smaller nubmer will more forward.
#weight: 1
# 开启数学公式渲染，可选值： mathjax, katex
# Support Math Formulas render, options: mathjax, katex
#math: mathjax
# 开启各种图渲染，如流程图、时序图、类图等
# Enable chart render, such as: flow, sequence, classes etc
#mermaid: true
---
将 Docker Desktop 安装到其他盘

<!--more-->

从官网下载 Docker Desktop 的安装链接.exe 后，不要直接点击！！！使用命令行安装，指定安装目录和数据目录。

# 1. 创建目录

```cmd
mkdir D:\develop\docker
mkdir D:\develop\docker\data
```

# 2. 执行安装

**管理员身份**打开 CMD，运行：

```cmd
start /w "" "Docker Desktop Installer.exe" install -accept-license --installation-dir=D:\develop\docker --wsl-default-data-root=D:\develop\docker\data
```

参数说明：
- `--installation-dir`：程序安装位置
- `--wsl-default-data-root`：镜像/容器数据位置（**必加**，否则数据仍在 C 盘）

# 3. 更改 Docker 源

国内镜像源博客（持续更新）：https://blog.xuanyuan.me/archives/1154

在 Docker Daemon 标签页的 JSON 配置中，向 "registry-mirrors" 数组添加：https://docker.xuanyuan.me；

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://docker.xuanyuan.me"
  ]
}
```


# 注意

- 部分配置文件仍在 `C:\Users\<用户名>\.docker`（体积很小）
- 安装前确保已开启 WSL2 或 Hyper-V

# 参考

https://stackoverflow.com/questions/75727062/how-to-install-docker-desktop-on-a-different-drive-location-on-windows

