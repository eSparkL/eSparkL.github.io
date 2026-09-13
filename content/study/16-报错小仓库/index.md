---
title: "报错小仓库（持续更新）"
description: 各类报错收集
# keywords: "hugo, test, sherry"
date: 2025-05-21T13:29:48+08:00
categories:
  - 大二
toc: true
---
<!--more-->

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

