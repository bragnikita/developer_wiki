---
title: Git common gotchas
category: git
---

## When "permission denied" on pushing to Github
Launch SSH agent
```
$ eval "$(ssh-agent -s)"
$ git push
```
