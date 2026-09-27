# Evidentia Notes

Jekyll source for `notes.evidentia.fr`, built on [LaTeX.css](https://latex.vercel.app/)
(Libertinus serif, small-caps title, sidenotes, light/dark toggle) rather
than a stock Jekyll theme.

## Writing a new note

Add a file to `_posts/` named `YYYY-MM-DD-slug.markdown`:

```yaml
---
title: "Title of the note"
date: 2026-09-27 12:00:00 +0200
---

Body in Markdown.
```

The layout, date formatting and footer are handled automatically
(`defaults` in `_config.yml`).

## Sidenotes

LaTeX.css sidenotes are plain inline HTML, typed directly into the
Markdown body right after the sentence they annotate:

```html
Some sentence.<label for="sn-SLUG-1" class="sidenote-toggle sidenote-number"></label><input type="checkbox" id="sn-SLUG-1" class="sidenote-toggle"><span class="sidenote">The aside text.</span>
```

**The `id` must be unique across the whole site**, not just within the
post — the homepage renders every post's full content on one page, so two
posts both using `sn-1` will collide. Prefix the id with the post's slug
(`sn-perimetres-1`, `sn-perimetres-2`, ...) as in the existing example
post.

Numbering in the margin is automatic (CSS counter) — the id's number
doesn't need to match its position.

## Local preview

```
bundle install
bundle exec jekyll serve
```
