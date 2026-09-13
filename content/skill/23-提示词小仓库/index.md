---
title: "23 提示词小仓库"
description: "23-提示词小仓库"
keywords: "23,提示词小仓库"
date: 2025-09-14T13:08:55+08:00
lastmod: 2025-09-14T13:08:55+08:00
categories:
  - 小仓库
tags:
  - 
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
#url: "23-提示词小仓库.html"
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
自己所用的各种提示词（科研、开发、比赛、写文案等），按功能分类

<!--more-->

## 论文代码复现

### 1. GitHub有源码、源码有README

#### GPT-4.0

if I want to run this project, what should I do by starting with the following setting:
[project link]：https://github.com/robert1ridley/cross-prompt-trait-scoring.git
[操作系统]：Windows
[编译器]：pycharm
[python版本]：python 3.6
[CPU/GPU]：only CPU available
[其他你现在已经完成的操作]：...
please teach me step by step, as detail as you could
Output the answer in chinese

---

(venv) D:\administrator\College\课后笔记\SE-软工\newsAPI_project>vue ui
(node:23504) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

```bash
在 nodejs v21.0.0 以上会出现该提示

识别哪些依赖项要使用punycode
npm ls punycode

发现`-- (empty)，可能意味着没有吧，先不管了
```

---

vue ui创建项目报错Cannot read properties of undefined (reading 'indexOf')

```bash
缺少了yarn管理器，在cmd窗口安装一个yarn管理器即可
npm install -g yarn
```

---