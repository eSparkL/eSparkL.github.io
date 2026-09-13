---
title: "34 Leetcode 字母异位词分组"
date: 2026-09-13T18:57:18+08:00
lastmod: 2026-09-13T18:57:18+08:00
description: "34-leetcode 字母异位词分组"
keywords: "34,leetcode 字母异位词分组"
draft: flase
toc: true
categories:
  - leetcode
tags:
  - 排序
  - 哈希
---

题目链接：https://leetcode.cn/problems/sfvd7V/description/

给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。

注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

<!--more-->
---

**分析：本质还是查找，查找→哈希。问题是用什么来作为“键”？**

用什么来作为“键”**有两种思路：**

1. 字符串中各个字母的个数组成的数组，该数组长度为26
2. 先对字符串排序，用排序后的字符串作为键

**第一种**时间复杂度为$O(n·(字符串长度 + 26))$，组成：

① 对每个字符串，统计字母个数$O(字符串长度)$

② 生成哈希表的键$O(26)$

③ 查找$O(1)$



**第二种**$O(n·字符串长度·log字符串长度)$，组成：

① 对每个字符串排序，k*logk

② 更新哈希表$O(1)$

**第一种方法时间复杂度更低**

---

`collections.defaultDict(default.factory)`：创建一个default.factory类型的字典，这里用list

`"".join(list)`：用""拼接列表元素

`sorted(str)`：排序，注意！返回的是列表，如['a', 'b', 'c']，转换为字符串需要用join拼接