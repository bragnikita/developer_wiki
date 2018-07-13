---
category: nginx
---
### Redirect to https
```
server {
    listen 80;
    server_name www.domain.com;
    return 301 https://www.domain.com$request_uri;
}
```
