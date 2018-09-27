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
---

## Categories

{% for cat in page.categories-display %}
### {{ cat }}
<ul>
  {% for page in site.wiki %}
      {% for pc in page.categories %}
        {% if pc == cat %}
          <li><a href="{{ page.url }}">{{ page.title }}</a>
          <span class="keywords">
            {{ page.keywords | split: ", " | join: " | " }}
          </span>
          </li>
        {% endif %}   
      {% endfor %}
  {% endfor %}
</ul>
{% endfor %}
