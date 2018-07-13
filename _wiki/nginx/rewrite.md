---
category: nginx
---
# Rewrite
http://nginx.org/ru/docs/http/ngx_http_rewrite_module.html

В директиве `rewrite` матчинг происходит по $request_uri (путь после доменного имени)

Установить cookie и перенаправить на /
```
location = /orig {
         expires -1;
         add_header Set-Cookie "serve_from=";
         rewrite ^.*$ / redirect;
   }
```

Собирает фактический путь к файлу из более красивого url
```
server {
    ...
    rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 last;
    rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  last;
    return  403;
    ...
}
```
или
```
location /download/ {
    rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
    rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  break;
    return  403;
}

```
> `break` в конце правила завершает обработку директив модуля rewrite и продолжает в текущем location
>
> `last` в конце правила завершает обработку директив модуля rewrite в текущем расположении и запускает
> заново поиск нового location

> По умолчанию параметры оригинального запроса присоединяются хвостом к параметрам перезаписанного запроса.
> Чтобы этого не происходило, надо к хвосту перезаписанного запроса добавить ?
>
> `rewrite ^/linux/(.*)$ /linux.php?distro=$1? last;`

## Пример использования try

В примере ниже запрос `http://www.domain.com/images/image1.gif` обрабатывается так: сперва в директории, определенной выше в `root` или `alias` ищется _image1.gif_ , затем _image1.gif/_, затем происходит внутреннее перенаправление на _/images/default.gif_ .
```
location /images/ {
    try_files $uri $uri/ /images/default.gif;
}

location = /images/default.gif {
    expires 30s;
}
```
