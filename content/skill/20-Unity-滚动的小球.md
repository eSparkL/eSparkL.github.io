---
title: "20 Unity 滚动的小球"
description: "20-Unity-滚动的小球"
keywords: "Unity, 1st project"
date: 2025-07-10T14:36:37+08:00
lastmod: 2025-07-10T14:36:37+08:00
categories:
  - Unity
  - 项目
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
#url: "20-unity-滚动的小球.html"
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
用一个项目零基础熟悉 Unity 引擎的基本操作。
开发之旅任重道远，这只是个微不足道开头，最终目标是做出自己的项目来。

个人学习记录，非系统学习，仅记录了对自己有用的东西。

参考课程：b 站 siki 学院
视频链接：<https://www.bilibili.com/video/BV15N41177JS/>

<!--more-->

## Unity 中的 Update 方法

### 查看帧率（即一秒执行多少次 Update 函数）

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Start运行了"); // 日志
    }

    private float updateCount = 0f;
    private float timer = 0f;
    private float updateRate = 0f;

    // Update is called once per frame
    // 每帧执行一次（flush），具体的帧率看电脑性能
    void Update()
    {
        updateCount++;
        timer += Time.deltaTime;

        if (timer >= 1f)
        {
            updateRate = updateCount / timer;
            updateCount = 0f;
            timer = 0f;
        }
    }

    void OnGUI()
    {
        // 每秒调用多少次
        GUI.Label(new Rect(10, 10, 200, 20), "Update Rate:" + updateRate.ToString("F2") + "updates/s");
    }
}
```

## 键盘控制

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public Rigidbody rd; // 定义刚体属性

    // Start is called before the first frame update
    private void Start()
    {
        Debug.Log("Start运行了"); // 日志
    }

    // Update is called once per frame
    // 每帧执行一次（flush），具体的帧率看电脑性能
    private void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");

        Vector3 dir = new Vector3(h, 0, v);
        rd.AddForce(dir * 3);
    }
}
```

