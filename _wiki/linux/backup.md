---
category: linux
keywords: rsync
---

## rsync
<http://www.opennet.ru/man.shtml?category=1&russian=0&topic=rsync>
Копирует из _~/dev/mdwiki/wiki/_ в _~/sync/wiki/_ содержимое в режиме синхронизации (удаляет из целевой папки удаленные в исходной)
: `rsync -tr --delete --exclude-from ~/jobs/wiki_backup_excludes.txt ~/dev/mdwiki/wiki/ ~/sync/wiki/`

Формат списка исключений
```
_site/
.DS_Store
.git/
.sass-cache/
```

### Crone job

Просмотр jobs
: `crontab -l`

Открыть crontab на редактирование
: `EDITOR=nano crontab -e`

Пример записи
: `59 19 * * * jobs/evening_jobs.sh` (каждый день в 19-59)

* Джобы выполняются в home-каталоге юзера.
* не забыть поставить флаг +x скрипту
