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

### Disable caching
```
location / {
  add_header Last-Modified $date_gmt;
  add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
  if_modified_since off;
  expires off;
  etag off;
  proxy_no_cache 1;
  proxy_cache_bypass 1;
}
```
