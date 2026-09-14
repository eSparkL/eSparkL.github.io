#!/bin/bash
set -e
git add .
msg="update: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$msg"
git push