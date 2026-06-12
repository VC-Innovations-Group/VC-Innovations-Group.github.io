# VC Innovations Group

Marketing website for VC Innovations Group, hosted on **GitHub Pages** at
**[vcinnovationsgroup.com](https://vcinnovationsgroup.com)**.

Built with **[Eleventy (11ty)](https://www.11ty.dev/)** and edited through
**[Pages CMS](https://pagescms.org/)** — no code required to change text, images, links,
fonts, or colors.

## Editing the site (no code)

1. Go to **[app.pagescms.org](https://app.pagescms.org)** and sign in with GitHub.
2. Open the **VC-Innovations-Group/VC-Innovations-Group.github.io** project.
3. Edit one of three sections, then **Save**:
   - **Theme (colors & fonts)** — brand colors, max width, heading/body font.
   - **Site & navigation** — brand name, nav links, footer, contact info.
   - **Page content** — hero, approach, ventures, about, and call-to-action copy + images.
4. Saving commits to GitHub, which automatically rebuilds and redeploys the live site
   (usually live within ~1–2 minutes).

## Project structure

| Path | Purpose |
| ---- | ------- |
| `src/index.njk` | Page template (sections, data-driven). |
| `src/_includes/base.njk` | `<head>`, all CSS, theme + font injection. |
| `src/_data/theme.json` | Colors + font choices (edited via CMS). |
| `src/_data/site.json` | Brand, nav, footer, contact (edited via CMS). |
| `src/_data/copy.json` | All page copy + images (edited via CMS). |
| `src/media/` | CMS-uploaded images. |
| `src/CNAME` | Custom domain for GitHub Pages. |
| `.pages.yml` | Pages CMS field configuration (the editing dashboard). |
| `.eleventy.js` | Eleventy build config. |
| `.github/workflows/deploy.yml` | Builds with 11ty and deploys to GitHub Pages. |

> Note: the data key is `copy` (not `content`) because `content` is a reserved Eleventy name.

## Developing locally

```bash
npm install
npm run dev      # live-reload dev server at http://localhost:4321
npm run build    # one-off build into _site/
```

## Fonts

Heading and body fonts are chosen in the CMS from a curated Google Fonts list defined in
`src/_includes/base.njk` (the `headingFonts` / `bodyFonts` catalog). To add a font, add an entry
to the catalog and a matching option in `.pages.yml`.
