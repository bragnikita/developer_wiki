---
category: nginx
---
# Reverse Proxy configuration

```
#user  nobody;
worker_processes  1;

error_log  /Users/default/nginx/error.log;
error_log  /Users/default/nginx/logs/error.log  notice;
error_log  /Users/default/nginx/logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

	log_format upstreamlog '[$time_local] $remote_addr - $remote_user - $server_name to: $upstream_addr: '
							'$request upstream_response_time $upstream_response_time msec '
							'$msec request_time $request_time';

    access_log  /Users/default/nginx/logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       4000;
        server_name  app2-jscore.co.jp;

        #charset koi8-r;

        access_log  /Users/default/nginx/logs/access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

		location /mcs_api {
			access_log  /Users/default/nginx/logs/upstream.log upstreamlog;
			proxy_pass_header       Server;
	        proxy_set_header        X-Real-IP $remote_addr;
	        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
	        proxy_set_header        X-Scheme $scheme;
	        proxy_set_header        Host $http_host;
	        proxy_set_header        X-NginX-Proxy true;
	        proxy_connect_timeout   5;
	        proxy_read_timeout      240;
	        proxy_intercept_errors  on;
			rewrite ^/mcs_api/(.*)$ /smpath/$1 break;
			proxy_pass https://localhost:10443;
		}

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    include servers/*;
}

```
