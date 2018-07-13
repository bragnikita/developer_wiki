---

keywords: ruby, cmd
---
## Using as command line tool
<https://robm.me.uk/ruby/2013/11/20/ruby-enp.html>

`-e` execute command
* `ruby -e 'puts Date.today()'`
* `$_` refers to the stdin, parsed as string

`-en` execute code inside loop (cat) - useful for multiline processing
```ruby
while gets
  # use $_ to get line from stdin
end  
```
* if filename specified, reads from it
`ruby -e 'puts $_' file.txt`

`-ep` simular to `-p` but outputs `$_` at the end of each iteration

`BEGIN { ... }` block executes before the loop

`ruby -ne 'BEGIN {puts "Content of file:"} puts $_'`

Multiple `-e` blocks are supporting
```
$ ruby -e 'puts "Hello, world."' -e 'puts "It is now #{Time.now}."'
Hello, world.
It is now 2017-08-08 16:45:10 -0500.
```

File input (`STDIN` variable)
```
ruby -e 'puts STDIN.readlines[58]' < ulysses.txt
‘Tis not too late to seek a newer world.
```
Or, `ARGF` is better (reads from stdin or from file)
```
$ ruby -e 'puts ARGF.readlines[58]' < ulysses.txt
‘Tis not too late to seek a newer world.
```

Examples of in-line processing of text
<https://hashrocket.com/blog/posts/ruby-on-the-command-line>
