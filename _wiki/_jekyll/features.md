## Layouts
* Use `_layouts` folder;
* Link in FM: `layout` relative to `<src root>/_layouts`
* Injecting the page content from layout file: `{{ "{{content}}" }}`

## Includes
* Use `_includes` folder
* Partials can be included using `{% raw %}{% include partial.md %}{% endraw %}`

## CSS
* Use `_sass` folder
* All `.sass` files merges into one `main.scss`

## Data
* Use `_data` folder
* Support: `.yaml`, `.yml`, `.json`, `.csv`
* Reference from the page: `site.data.<filename>`

## Posts
* Use `_posts` folder
* File name format: `YEAR-MONTH-DAY-title.MARKUP`

## Front Matter
> You __must__ specify at least empty FM. Otherwise the file is treated as static file and copied to dest <u>without any processing</u>

Front Matter example
```
---
layout: post
title: Blogging Like a Hacker
---
```
* referencing: `{{ page.<parameter> }}`

## Basic settings
* file: `_config.yml`
* global settings could be referenced from any page with `{{ site.<prop>}}`

* `source` - source files for convertation into the site, default `.`
* `destination` - build directory, default `./_site`
* `keep_files: [<array of files and dirs]` - keep files inside _destination_ folder between rebuilds (for non-jekyll managed assets)
* `include/exclude: [array]`
#### Yaml FM defaults
`defaults` - map of defaults for YAML Front Matter (for each scope)
Scope is defining by path of source file. Example of `defaults` for 'anime' posts
```yaml
defaults:
  -
    scope:
      path: "anime" # anime/ folder; "" for all files in project
      type: "posts" # optional filter, can be name of any collection
    values:
      layout: "narrow_with_cute_header"
```
> The latest scope settings takes precedence

## Environment
Specifying the environment
```
JEKYLL_ENV=production jekyll build

{% if jekyll.environment == "production" %}
   {% include disqus.html %}
{% endif %}
```

## Collections
* list collections in \__config.yml_ with `collections:` key
* defining metadata for collection
* default attributes can be also set for a collection
```yaml
collections:
  my_collection:
    foo: bar
    output: true #produces page document for each document in the collection
    permalink: /:collection/:name
defaults:
  - scope:
      path: ""
      type: my_collection
    values:
      layout: pager
```
* _posts_ and _drafts_ are predefined collections
* root folder for all collections can be specified with `collections_dir` folder (default is root)
* collections folders has format `_<collection name>`
* vars for **permalink**: `:collection`, `:path`, `:name`, `:title` (uses __slug__ param from FM), `:output_ext`
* collection is available under `site.<collection_name>` (docs collection)
* collection is also available under `site.collections` and is structure of
```
{
  label:
  docs:
  files: #static files
  relative_directory: #source dir rel
  directory: # source dir full path
  output: #output parameter
}
```
### Document object
* contains all props from the FM
* additional props:
  - content
  - output
  - path
  - relative_path
  - url
  - collection
  - date
