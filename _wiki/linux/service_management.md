---
title: CentOS System services management
category: linux
keywords: linux, services, admin
---
Для просмотра, старта, остановки, перезагрузки, включения или выключения системных сервисов используется команда systemctl. Команды service и chkconfig по-прежнему включены в систему, но только по соображениям совместимости.  
Ниже представлены основные команды systemctl:
* systemctl start name.service – запуск сервиса.
* systemctl stop name.service — остановка сервиса
* systemctl restart name.service — перезапуск сервиса
* systemctl try-restart name.service — перезапуск сервиса только, если он запущен
* systemctl reload name.service — перезагрузка конфигурации сервиса
* systemctl status name.service — проверка, запущен ли сервис с детальным выводом состояния сервиса
* systemctl is-active name.service — проверка, запущен ли сервис с простым ответом: active или inactive
* systemctl list-units --type service --all – отображение статуса всех сервисов
* systemctl enable name.service – активирует сервис (позволяет стартовать во время запуска системы)
* systemctl disable name.service – деактивирует сервис
* systemctl reenable name.service – деактивирует сервис и сразу активирует его
* systemctl is–enabled name.service – проверяет, активирован ли сервис
* systemctl list-unit-files --type service – отображает все сервисы и проверяет, какие из них активированы
* systemctl mask name.service – заменяет файл сервиса симлинком на /dev/null, делая юнит недоступным для systemd
* systemctl unmask name.service – возвращает файл сервиса, делая юнит доступным для systemd

# Linux
* <https://habr.com/company/infobox/blog/241237/>
