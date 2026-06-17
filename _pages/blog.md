---
layout: page
permalink: /blog/
title: notes
nav: false
nav_order: 1
---

Short notes on research ideas, project updates, and things I am learning while building LLM and urban AI systems.

{% assign posts = site.posts | sort: "date" | reverse %}
{% for post in posts %}

**[{{ post.title }}]({{ post.url | relative_url }})**

{{ post.date | date: "%b %-d, %Y" }}

{{ post.description }}

{% endfor %}
