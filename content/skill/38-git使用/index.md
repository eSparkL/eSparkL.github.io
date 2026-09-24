---
title: "38 Git使用"
date: 2026-09-24T17:46:43+08:00
lastmod: 2026-09-24T17:46:43+08:00
description: "38-git使用"
keywords: "38,git"
draft: false
toc: true
categories:
tags:
---



<!--more-->

## 不想要跟踪某个文件

使用`skip-worktree`，可忽略本地修改，不进 git status、不提交，使得本地修改不影响其他端

```bash
git update-index --skip-worktree 文件.sh
```

检查是否生效

```bash
git ls-files -v | grep 文件.sh
```

| 行首标记 | 含义 |
|---------|------|
| `S` | skip-worktree |
| `h` | assume-unchanged |
| `H` | 正常跟踪 |

恢复跟踪

```bash
git update-index --no-skip-worktree 文件.sh
```

