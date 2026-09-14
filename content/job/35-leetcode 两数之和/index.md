---
title: "35 Leetcode 两数之和"
date: 2026-09-14T16:59:35+08:00
lastmod: 2026-09-14T16:59:35+08:00
description: "35-Leetcode 两数之和"
keywords: "35,Leetcode 两数之和"
draft: flase
toc: true
categories:
  - leetcode
tags:
  - 哈希
---

[点我看题](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

<!--more-->
## 1、暴力破解 $N^2$

设置两个指针$i, j$ ，遍历列表

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i]+nums[j] == target:
                    return [i, j]
```

## 2、哈希查找 $N$

关键：当前元素为x时，减少查找到 target-x 所需要的次数

增加的开销：哈希表所需的空间

思路概要：

建立一个空的哈希表

指针$i$ 遍历列表，若存在 target - List[i]，输出下标；否则将 List[i] 存入哈希表中

注：哈希表的作用为，存储值为x的元素在原始列表中的下标

哈希表核心在于“键”“值”，对应python中的dict类型

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable = dict()
        for i in range(len(nums)):
            x = nums[i]
            if target - x in hashtable:
                return [i, hashtable[target - x]]
            else:
                hashtable[x] = i
```