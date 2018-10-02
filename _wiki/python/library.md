---
title: Python Std Library
category: python
---

## File IO
### Common file manipulation
```python
with open('workfile') as f:
  read_data = r.read
# implicitly calls f.close
```
`open(file, mode=<mode>, encoding=<enc>)`. mode:
  * `r,w,r+,a` - text mode
  * `rb` - binary mode

### File methods
* f.read([size]) - entire file
* f.readline() / f.readlines() - single string or string array
* f.write(str)
* print(string, file)
* json.dumps(object, file) - serializes the object to a text file, opened for writing
* object = json.load(file) - loads

## FileSystem
### FS
Using `os`
```
os.listdir(src)
os.path.join(p1,p2)
os.path.isdir
```

```
from pathlib import Path
p = Path('.')
list(p.glob('**/*.py')) # list tree
p.join(other_p)
q = p / 'init.d' / 'reboot' # => ./init.d/reboot
q.resolve() #resolves symlinks

Path.cwd() Path.home()

q.exists() # True if exists
q.is_dir() q.is_file() q.is_symlink()
p.stat() # => stat object
sorted(p.glob(*/*.py)) p.rglob('*.py')
p.iterdir()

p.mkdir(parents=True, exist_ok=True) # analog of mkdir -p <>
p.rename(traget)
p.replace(target)
p.unlink() / p.rmdir()
```
### High-level ops
`from shutil import *`  
* copytree(src,dst,ignore=None)
* rmtree(path)
* move(src,dst)
* disk_usage(path)
* which(cmd)
* copy(src,dst)
* make_archive(name, format, root_dir) => path of created archieve
  - formats: 'zip', 'tar', 'gztar'
* unpack_archive(filename, extract_dir, format)


### Path
```
q.parts # array of parts
q.parent / q.parents
q.name # final path component
q.suffix # extention with dot
q.stem # final path component without suffix
q.as_uri() q.is_absolute()
q.match('b/*.py')
q.relative_to(other_path) # => relative version of path q
```

### PurePath
Provide path operations that dont actually access a filesystem
```
from pathlib import PurePath
p = PurePath(".", "abs", "text.log")
```
