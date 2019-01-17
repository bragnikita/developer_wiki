---
layout: "wiki_index"
categories-display:
  - nginx
  - rails
  - redux
  - rspec
  - ruby
  - webpack
  - js
  - jekyll
  - linux
  - react
  - python
  - web
  - golang
  - git
---

## Categories

{% for cat in page.categories-display %}
### {{ cat }}
<ul>
  {% for page in site.wiki %}
      {% for pc in page.categories %}
        {% if pc == cat %}
          <li><a class="preview_link" href="{{ page.url }}">{{ page.title }}</a>
          <span class="keywords">
            {{ page.keywords | split: ", " | join: " | " }}
          </span>
          </li>
        {% endif %}   
      {% endfor %}
  {% endfor %}
</ul>
{% endfor %}
