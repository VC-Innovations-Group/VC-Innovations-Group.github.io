# VC Innovations Group

Marketing website for VC Innovations Group, hosted on **GitHub Pages** with the
custom domain **[vcinnovationsgroup.com](https://vcinnovationsgroup.com)**.

## Structure

| File         | Purpose                                                        |
| ------------ | ------------------------------------------------------------- |
| `index.html` | The landing page (single-file static site).                   |
| `CNAME`      | Tells GitHub Pages which custom domain serves this repo.       |
| `.nojekyll`  | Disables Jekyll so files are served exactly as-is.            |
| `404.html`   | Custom not-found page.                                         |

## Local preview

It's a static site — just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploying

GitHub Pages deploys automatically from the `main` branch on every push.
After pushing, changes are live at https://vcinnovationsgroup.com within a minute.

## DNS

The apex domain (`vcinnovationsgroup.com`) is registered through Squarespace and
points to GitHub Pages via four `A` records, with `www` as a `CNAME`. See repo
**Settings → Pages** for the current custom-domain status.
