# Syek.com / eSparkL.top

个人博客源码。Hugo + [hugo-clarity](https://github.com/chipzoller/hugo-clarity) 主题，GitHub Pages 托管。

## 环境准备

主题要求 **Hugo Extended 0.156 或更高版本**（旧版 Hugo 会因为主题用到 `hugo.Data` 而构建失败）。

```powershell
hugo version   # 需要显示 extended 且版本 >= 0.156
```

本仓库不含 `public/`，站点由 GitHub Actions 自动构建发布，本地只需要写内容和预览。

## 每天怎么写文章

```powershell
git pull --rebase                     # 先同步
hugo new content study/34-新文章/index.md   # 新建文章（在 content/study 下）
hugo server -D                        # 本地预览 http://localhost:1313
```

写完提交：

```powershell
git add -A
git commit -m "post: 新文章"
git push
```

推送后 GitHub Actions 会自动构建并发布，1~2 分钟后线上生效。

## 文章写法约定

- 每篇文章一个文件夹：`content/study/<序号-标题>/index.md`
- 图片直接放在同一文件夹里，正文用 `![](image.png)` 引用（`usePageBundles = true` 已开启）
- URL 就由文件夹名决定，例如 `content/study/34-新文章/index.md` → `https://eSparkL.top/study/34-新文章/`

front matter 常用字段：

```yaml
---
title: "标题"
date: 2026-09-13T10:00:00+08:00
lastmod: 2026-09-13T10:00:00+08:00
description: "摘要，用于搜索引擎和首页卡片"
keywords: "关键词1,关键词2"
categories: ["课程"]     # 可留空
tags: ["Python", "笔记"]
toc: true                # 是否显示文章目录
draft: false             # true 时本地可见、线上不发布
---
```

其他可选字段：`weight`（置顶，数字越小越靠前）、`featured: true`（首页精选）、
`featureImage`（文章头图）、`thumbnail`（首页卡片图）、`sidebar: false`（隐藏侧边栏）、
`enableMathNotation: true`（该文启用 LaTeX 公式）、`comments: false`（该文关闭评论）。

## 提示框写法

```markdown
{{%/* notice note "标题" */%}}
这是提示内容，支持 Markdown。
{{%/* /notice */%}}
```

第一个参数可选 `note` / `info` / `tip` / `warning`。

## 目录结构

```
config/_default/      站点配置（hugo.toml / params.toml / languages.toml / menus / markup）
content/              文章
  study/              学习笔记（首页和归档只展示这个目录）
  about.md            关于页
  archives.md         归档页（自定义 layout）
  flinks.md           友情链接页（数据在 data/flinks.yaml）
  search.md           搜索页
data/flinks.yaml      友链数据
layouts/              对主题的自定义覆盖
static/               图标、头像、自定义 CSS
themes/hugo-clarity   主题（直接提交进仓库，升级时替换整个目录）
```

## 域名与部署

- 自定义域名 `eSparkL.top` 配置在仓库 **Settings → Pages → Custom domain**，不要删。
- Pages 的 **Source 必须是 GitHub Actions**，发布由 `.github/workflows/hugo-deploy.yml` 完成。
- 站点根地址写在 `config/_default/hugo.toml` 的 `baseURL`，改域名时两处都要改。

## 换主题 or 升级主题

主题目录是「vendor」进来的普通目录：

```powershell
# 升级到最新版
git -C themes/hugo-clarity pull

# 或者直接删掉重下
Remove-Item -Recurse -Force themes/hugo-clarity
git clone https://github.com/chipzoller/hugo-clarity.git themes/hugo-clarity
Remove-Item -Recurse -Force themes/hugo-clarity/.git
```

注意：升级主题后先用 `hugo` 本地构建一次，确认没有报错再提交。

## 已知坑

1. **不要把图片以 base64 内联粘进 Markdown**。编辑器（VSCode 的粘贴插件、Typora 等）有时会把截图存成
   `![](data:image/png;base64,iVBOR...)`，这种写法在 Linux 构建环境里会因为“文件名超长”直接让
   Actions 构建失败，而 Windows 本地反而不报错，很容易踩。正确做法是把图片存成文件放在文章目录里，
   再写 `![](图片名.png)`。
   （2026-09 迁移时就有一处这种写法，已还原成 `content/study/31-互联网程序设计/inline-image-1.png`。）
2. `content/study/4-软工课堂思路笔记/index.md` 第 244 行引用了 `144794092b95c6f3374bf8e129c1466.jpg`，
   这个文件在仓库和旧站里都找不到，页面上会显示破图。需要补图或删掉那一行。
3. `content/study/test.md` 里有两处图片引用写在缩进代码块中（第 53、82 行），是示例文本，不会渲染成图片。
