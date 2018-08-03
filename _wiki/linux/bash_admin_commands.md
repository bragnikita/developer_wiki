---
title: Linux admin commands
category: linux
tags: bash
---

# Disk usage/folder size
```bash
du -sh <location>
```


# Search

### Find

<http://mywiki.wooledge.org/UsingFind>

`find <start location> -type <object type> <options>`

* `-name ''` - wildcard for file name
* `-path ''` - wildcard for path (starting from the root)
* `-depth 1` - non recursive search
* `-maxdepth n` - max depth
* `-type` - object type (f, d)
* `-print0` - use \x0 as line delimeter (useful for conveyer processing)
* `-newer <file>` - find files that are newer than specified
* `-mtime +<days>` - find files older than 30 days	( `-<days>` retrieves files, modified within 30 days)
* `-regex ""` - regex (from whole file name).
	* Use `-regextype posix-egrep` in linux for extended mode
	* Use `-E` in MacOS for extended mode
	* `-regex ".*\.jpe?g"` to ignore the directories path
* `-exec` - exec command on each file (use {} as a placeholder for the file name)
* `-delete` - deletes files
#### Actions
* `-printf` - print with format: `find . -printf ''` (see <http://man7.org/linux/man-pages/man1/find.1.html>)
	* %f - filename (without dirs)
	* %p - filename from find start point (%P removes started point)
	* %s - size
	* \n - newline
	* \t - tab
	* %h - directory of file
	* %t - last modif time (%Tk displays time in _k_ format )
* `-print` - print file names (default action)
* `-o` - 'OR' concatenation: `find . \( -name '*.mp3' -o -name '*.aac' \) -print`

```bash
#deletes all sh files from the current directory
find . -name "*.sh" -exec rm -rf '{}' \
#if there is a space in file name, use this command
find . -name "*.sh" -print0 | xargs -0 rm -rf
#search across content of files that was found
find . -name '*.log' -exec grep -e 'fatal|error' {}
```

### grep
* `grep -E 'fatal|error|critical|' *.log ` - search in file content with regex

# Archive

### tar
* `tar -cvf arch.tar *.log a.conf b.txt`
* `tar -xvf arch.tar -C out_dir`

### zip
* gunzip file.gz

# Utils

### xargs
```
> echo 1 2 3 4 | xargs -n2 -I{} echo "out: {}"
out: 1 2
out: 3 4
```
* `-P` max parallel processes
* `-t` print command to standart error before execute
* `-0` use `\0` as delimeter
* `-E` set eofstr as delimeter (default are space,tag,newline and eoffile)

### date
`date` displays current date as `Tue May 29 15:18:07 JST 2018` (format `%a %b %d %T %Z %Y` )
* formatting: `date +'%Y %m %d %H %M %S'`
* set separate fields: `date -v1m -v2h`
* set fields to relative values: `date -v+5m` (after 5 mins)

# Network
## Netcat (`nc`)
Checking whether some service is listening the specified port  
`nc -vz <host> <port> 2>/dev/null` returns 0 if a service is available

Example: waiting for some service
```sh
until nc -vz elasticsearch 9200 2>/dev/null; do
  echo "Elasticsearch is not ready, sleeping."
  sleep 1
done
```
