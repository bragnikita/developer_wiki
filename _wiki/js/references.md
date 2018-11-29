---
category: js
---

Unicode in JS
: <https://mathiasbynens.be/notes/javascript-unicode>


## Tools

JavaScript escapes
: <https://mothereff.in/js-escapes>

## Libs

### URI parser
<http://medialize.github.io/URI.js/docs.html>  
`yarn add urijs`  

```javascript
import URI from 'urijs';
let u = new URI();
/*the next methods are setters and getters*/
u.protocol/port/hostname/domain/path/directory/filename/fragment/search/resource
/* method(true) returns decoded result (map for search)*/
uri.is("relative") === false;
uri.is("absolute") === true;
var result = URI.parseQuery("?foo=bar&hello=world&hello=mars&bam=&yup"); //returns map
uri.setSearch({ foo: "bar", goodbye : ["world", "mars"] });
uri.addSearch({ foo: "bar", goodbye : ["world", "mars"] });
uri.removeSearch("hello", "world");
uri.hasQuery("string", "bar") === true;
uri.readable()
URI.decode("h%C3%A4%20lo%23w%2Arl%3Ad%21") === "hä lo#w*rl:d!";
URI.encode("hä lo#w*rl:d!") === "h%C3%A4%20lo%23w%2Arl%3Ad%21";
```
