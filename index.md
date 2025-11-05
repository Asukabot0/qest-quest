---
title: Vision
lang: ja
layout: default
nav_order: 1
hero_slider_interval: 5000
stylesheets:
  - /assets/css/home.css
scripts:
  - src: /assets/js/design.js
    defer: true
  - src: /assets/js/index.js
    defer: true
  - src: /assets/js/hero-slideshow.js
    defer: true
hero_slides:
  - src: /assets/img/approach/sf.jpg
    link: /projects/
    alt_jp: "SFプロトタイピングのイメージ"
    alt_en: "SF Prototyping"
    caption_jp: "SFプロトタイピング — 未来像の素描から議論をはじめる"
    caption_en: "SF Prototyping — Start from vivid future sketches"
    cta_text_jp: "プロジェクトを見る"
    cta_text_en: "See projects"
    cta_url_jp: /projects/
    cta_url_en: /en/projects/
  - src: /assets/img/approach/cocreation.jpg
    link: /activities/
    alt_jp: "共創ワークショップの様子"
    alt_en: "Co-creation workshop"
    caption_jp: "共創ワークショップ — 2040/2050のユースケース創出"
    caption_en: "Co-creation Workshops — Generate 2040/2050 use cases"
    cta_text_jp: "活動を見る"
    cta_text_en: "See activities"
    cta_url_jp: /activities/
    cta_url_en: /en/activities/
  - src: /assets/img/approach/behavior.jpg
    link: /method/
    alt_jp: "行動変容シナリオの図"
    alt_en: "Behavior-change scenario"
    caption_jp: "行動変容シナリオ — 日常から考える"
    caption_en: "Behavior-change scenarios — From everyday life"
    cta_text_jp: "方法論"
    cta_text_en: "Method"
    cta_url_jp: /method/
    cta_url_en: /en/method/
---

{% include home/hero-intro.html %}
{% include home/hero-slideshow.html slides=page.hero_slides interval=page.hero_slider_interval %}
{% include home/news-band.html %}
{% include home/activities-band.html %}
{% include home/contact.html %}
