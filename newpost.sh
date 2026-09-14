#!/bin/bash
read -p "放入栏目（如 job）: " col
read -p "文章名称（数字-名称）: " post_name

if [ -z "$col" ] || [ -z "$post_name" ]; then
  echo "不能为空"
  exit 1
fi

/mnt/d/administrator/College/_myblog/_tools/hugo_extended_0.166.0_windows-amd64/hugo.exe new content -k post "$col/$post_name/index.md"