---
title: "Hugo常用命令"
description:
keywords:
date: 2025-05-12T23:20:40+08:00
lastmod: 2025-05-12T23:20:40+08:00
toc: true
categories:
  - Hugo
tags:
---
> 当前欠缺：
> - 无法渲染数学公式如 $a$, $x^2$
> - 代码没有显示所用语言

## 基础命令

1. 修改设置后重新构建网站：

  ```cmd
  hugo server --cleanDestinationDir
  ```

2. 创建新内容

  ```cmd
  hugo new content -k post 'job/new_posts/index.md'
  ```

> 废弃：hugo new posts/new_posts/index.md # Syrella.com

3. 推送到GitHub Page

  ```cmd
  hugo

  git add .

  git commit -m "更新时间"

  git push
  ```

4. 脚本化创建和推送过程

  ```cmd
  bash newpost.sh # 在其他电脑需要修改hugo.exe路径
  ```

  ```cmd
  bash update.sh
  ```
  