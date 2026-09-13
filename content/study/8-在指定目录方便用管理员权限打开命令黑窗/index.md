---
title: "在指定目录方便用管理员权限打开命令黑窗"
description:
keywords:
date: 2025-05-16T23:40:00+08:00
lastmod: 2025-05-16T23:40:00+08:00
---
<!-- more -->

> [我是参考博客](https://www.cnblogs.com/Wayou/p/3359993.html#:~:text=%E5%90%8C%E6%A0%B7%E5%9C%B0%EF%BC%8C%E6%88%91%E4%BB%AC%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E4%BC%A0%E7%BB%9F%E7%9A%84%E6%96%B9%E6%B3%95%E6%89%93%E5%BC%80%E4%B8%80%E4%B8%AA%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E8%BF%90%E8%A1%8C%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AA%97%E5%8F%A3%EF%BC%8C%E6%96%B9%E6%B3%95%E5%B0%B1%E6%98%AF%E5%9C%A8%E5%BC%80%E5%A7%8B%E8%8F%9C%E5%8D%95%E9%87%8C%E6%89%BE%E5%88%B0%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AA%97%E5%8F%A3%E6%88%96%E8%80%85%E7%9B%B4%E6%8E%A5%E5%9C%A8%20C%3AWindowsSystem32%20%E6%89%BE%E5%88%B0,cmd.exe%20%E5%8F%B3%E9%94%AE%E9%80%89%E6%8B%A9%22%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E8%BF%90%E8%A1%8C%22%EF%BC%8C%E7%84%B6%E5%90%8E%E5%86%8D%E6%89%8B%E5%8A%A8%E5%AE%9A%E4%BD%8D%E5%88%B0%E9%9C%80%E8%A6%81%E7%9A%84%E6%96%87%E4%BB%B6%E5%A4%B9%E3%80%82%20%E8%BF%99%E9%87%8C%E8%A6%81%E4%BB%8B%E7%BB%8D%E5%A6%82%E4%BD%95%E5%9C%A8%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95%E9%87%8C%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E8%8F%9C%E5%8D%95%E9%80%89%E9%A1%B9%E8%AE%A9%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%87%8C%E7%9B%B4%E6%8E%A5%E5%8F%B3%E5%87%BB%E9%BC%A0%E6%A0%87%E4%BE%BF%E5%8F%AF%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E6%89%93%E5%BC%80%E4%B8%80%E4%B8%AA%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%AA%97%E5%8F%A3%EF%BC%8C%E9%82%A3%E6%A0%B7%E7%9A%84%E8%AF%9D%E5%B0%86%E4%BC%9A%E8%AE%A9%E5%B7%A5%E4%BD%9C%E5%8F%98%E5%BE%97%E9%9D%9E%E5%B8%B8%E8%BD%BB%E6%9D%BE%E3%80%82, "如何方便快速在指定文件夹打开命令行 ")

1. 将以下代码复制到一个文本文件，然后保存成 cmd.reg，注意文件后缀是reg，注册表文件。

```bash
Windows Registry Editor Version 5.00

; Created by: Shawn Brink

; http://www.sevenforums.com

; Tutorial: http://www.sevenforums.com/tutorials/47415-open-command-window-here-administrator.html

[-HKEY_CLASSES_ROOT\Directory\shell\runas]

[HKEY_CLASSES_ROOT\Directory\shell\runas]

@="Open cmd here as Admin"

"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]

@="cmd.exe /s /k pushd \"%V\""

[-HKEY_CLASSES_ROOT\Directory\Background\shell\runas]

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas]

@="Open cmd here as Admin"

"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas\command]

@="cmd.exe /s /k pushd \"%V\""

[-HKEY_CLASSES_ROOT\Drive\shell\runas]

[HKEY_CLASSES_ROOT\Drive\shell\runas]

@="Open cmd here as Admin"

"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Drive\shell\runas\command]

@="cmd.exe /s /k pushd \"%V\""
```

2. 哪天你不想要这个新加的选项了，请把下面的代码复制，同样保存到一个文本文件然后存为remove.reg，双击运行之。选项就会消失，菜单恢复正常。

```bash
Windows Registry Editor Version 5.00

; Created by: Shawn Brink

; http://www.sevenforums.com

; Tutorial: http://www.sevenforums.com/tutorials/47415-open-command-window-here-administrator.html

[-HKEY_CLASSES_ROOT\Directory\shell\runas]

[-HKEY_CLASSES_ROOT\Directory\Background\shell\runas]

[-HKEY_CLASSES_ROOT\Drive\shell\runas]
```
