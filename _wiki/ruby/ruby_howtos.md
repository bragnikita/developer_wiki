---
title: Ruby howtos
category: ruby
---
#### Parse/Escape URL
```ruby
#parse
uri = URI("http://example.com?par=hello&par2=bye")
uri.path/query/scheme/host/fragment
#join
URI.join('http://example.com','/path','?a=10&b=4', '#title')
#parse query
Rack::Utils.parse_query uri.query #or
require 'uri'; URI::decode_www_form(uri.query).to_h # returns map of strings
require 'cgi'; CGI::parse('param1=value1&param2=value2&param3=value3') # returns map of arrays of strings
# URL-encoded string/decode
URI.escape/unescape
URI.decode_www_form_component/encode_www_form_component
# encode to query string
URI.encode_www_form("q" => ["ruby", "perl"], "lang" => "en") #=> "q=ruby&q=perl&lang=en"
# find first URL in string
html_string.slice(URI.regexp)
```