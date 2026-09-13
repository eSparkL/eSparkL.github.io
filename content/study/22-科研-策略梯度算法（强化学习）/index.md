---
title: "22 科研 策略梯度算法（强化学习）"
description: "22-科研-策略梯度算法（强化学习）"
keywords: "22,科研,策略梯度算法（强化学习）"
date: 2025-09-13T16:44:23+08:00
lastmod: 2025-09-13T16:44:23+08:00
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
#url: "22-科研-策略梯度算法（强化学习）.html"
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
阅读CEAES: Bidirectional Reinforcement Learning Optimization for Consistent and Explainable Essay Assessment的补充

<!--more-->

之前在吴恩达机器学习网课中学习的应该是基于价值的（Value-Based）的强化学习方法，即DQN。它是通过学习价值函数V（s）来间接地获得策略。

而基于策略（Policy-Based）的方法则直接参数化并优化策略本身。为此设计了一个用参数$\theta$控制的函数函数$\pi_{\theta}(a|s)$。目的是找到最优的参数$\theta^*$，使策略$\pi_{\theta^*}$积累的回报最大化。

