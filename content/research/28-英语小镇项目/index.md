---
title: "28 英语小镇项目"
description: "28-英语小镇项目"
keywords: "28,英语小镇项目"
date: 2025-10-27T11:12:01+08:00
lastmod: 2025-10-27T11:12:01+08:00
categories:
  - 项目
tags:
  - 智能体
  - AI+教育
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
#url: "28-英语小镇项目.html"
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
28-英语小镇项目

<!--more-->

## 复现项目

### chatdev

按照GitHub页面操作安装

```bash
yarn install

yarn build
```

`yarn install`：出现sharp无权限以及找不到python环境的问题。

解决办法：用管理员权限打开cmd，因为python环境我统一用annaconda管理，所以在系统环境变量里配置了annaconda的路径。
![alt text](image.png)

`yarn build`：无法找到 minimatch 的类型定义文件
error TS2688: Cannot find type definition file for 'minimatch'.
  The file is in the program because:
    Entry point for implicit type library 'minimatch'

解决办法：

```bash
yarn add @types/minimatch --dev
```
