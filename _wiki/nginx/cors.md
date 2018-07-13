---
category: nginx
---
#CORS

## Конфиг разрешает запрос с любого Origin, подставляя это значение в `Access-Control-Allow-Origin`

В блоке location
```
if ($request_method = 'OPTIONS') {
	add_header 'Access-Control-Allow-Origin' "$http_origin" always;
	add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS, PATCH' always;
	add_header 'Access-Control-Allow-Credentials' true always;
	#
    # Custom headers and headers various browsers *should* be OK with but aren't
    #
    add_header 'Access-Control-Allow-Headers' 'Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range' always;
    #
    # Tell client that this pre-flight info is valid for 20 days
    #
    add_header 'Access-Control-Max-Age' 1728000;
    add_header 'Content-Type' 'text/plain; charset=utf-8';
    add_header 'Content-Length' 0;
    add_header 'Access-Control-Max-Age' 86400 always;
    return 204;
}
if ($request_method ~ "(POST)|(GET)|(PUT)|(PATCH)|(DELETE)") {
    add_header 'Access-Control-Allow-Origin' "$http_origin" always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS, PATCH' always;
    add_header 'Access-Control-Allow-Credentials' true always;
    add_header 'Access-Control-Allow-Headers' 'Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range' always;
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
 	add_header 'Access-Control-Max-Age' 86400 always;
}
```

проще вынести это в отдельный конфиг и импортить в `location /` директивой `include conf.d/cors.conf;`
