---
title: IO API
categories:
  - ruby
keywords: File, IO, Dir  
---

# File API

https://ruby-doc.org/core-2.5.0/File.html

```ruby
File.open 'file' do |f|
# f - IO object
end
```
EOFError

File class methods
* new "path", mode="r" - returns File. mode - constatn from File::Constants
* open "path", mode="r" - returns File
* exist? "path"
* file?
* mtime - modification time
* absolute_path "rel path" - relative to the current dir
* fnmatch?(globbing expr, path) - matches path against globbing pattern
* join
* size/size?
* unlink - delete file/files
* rename(oldname, newname)

File instance methods

* atime - last access time
* birthtime
* mtime - modif time
* flock(LOCK_MODE) - lock

* `PATH_SEPARATOR`
* `__FILE__` - current file
* `Rails.root.join('path', 'path')` - relative to the Rails root path
* `File.expand('path part1', 'path part2')`
* `File.expand('../', __FILE__)` - directory of the current file

# Dir API

*SystemCallError* rises if Dir is not exists

### Globbing pattern
* `*` - any file/part
* `**` - dirs recursively
* `?` - one char
* [set] - any one char in set
* {p,q} - matches p or q
* `\` - escape next
> backslash in Windows can not be used as part of a glob


Dir class methods
`chdir` - changes current directory of the process. If block given, directory is changed inside it only

### Traverse
* `glob(pattern, [flag][,base]) +block`
* `children(dir, encoding: enc)`
* `each_child +block`
* `foreach +block`
* `entries -> array`

### Manipulate
* `mkdir`
* `rmdir, unlink, delete`

### Check
`exist?`
`getwd`, `pwd` - current working dir
`home`

# IO API
IO class methods
* foreach(path, separator=$/) {|line|}

### Open
IO.open(name, mode, opt )
mode:
* fmode
* fmode:ext_enc
* fmode:ext_enc:int_enc
fmode: "r" - read, "w" - write, "a" - append (mode+ -versions are read-write)
ex: `IO.open('temp.txt', 'w+:ASCII:UTF-8') do |f|`

`io.print`, `io.printf`, `io.puts`

### Read
`IO.read(name,[length[,offset]][,opt]) -> string`
`opt` hash: :encoding, :mode (should starts with "r"), :open_args

`IO.readlines(name, sep,[,getline_args, open_args]) -> string array`

`io.gets(separator, getline_args)` - returns next line (or nil if eof) and also assign $_
`io.readline(sep)` - same as gets but rize EOFError on end of file
`io.each_byte`, `io.each_char`, `io.each_line`
`io.eof?`
`io.lineno` - current line number


### Write
`IO.write(name, string,[,offset][,opt] -> number of written bytes`
`opt` hash: :encoding, :mode, :open_args

`io.flush`


### Close
`io.close` - closes and flush
