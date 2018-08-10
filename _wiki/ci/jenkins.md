---
title: Jenkins essentials
category: ci
keywords: jenkins, ci
---
Jenkins Pipeline - это набор плагинов, которые реализуют конвейер операциий CI.  
Jenkinsfile - это модель пайплайна, записанное кодом, которую сохраняют в репозиторий проекта.


# Fast startup
```sh
docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```
