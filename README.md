# wp-site-wwii (Webpack4构建的二战军事资料库网站)

![Webpack 4](./src/webpack4.svg) ![Project version](./src/wp-wwii-version.svg)

Purpose to build a static military documentary website developed by webpack4 + express + pug based on node.js framework.

Relevant Project (Powered By **Gulp**) : **[gp-site-wwii](https://vincentzhcn.coding.net/p/gp-site-wwii/)** hosted on Tencent Git. 

## Basical usage:

1. Add weapon content
- Add new weapon datasource files((include *.js, *.json)) to folder `src/js_[TWO_LETTERS_NATION_CODE]/`, as well as modify relevant datasource files which under folders `src/js_index/`.
- Copy and paste all relevant weapon picture files to `dist/imgs/[TWO_LETTERS_NATION_CODE]/` according to the corresponded datasource files.

2. Build/Generate static website content by CLI
```bash
# Build/Generate CLI list
npm run build:all   # Build ALL website content
npm run build:index # Build index, about, menu, header, footer... pages
npm run build:de    # Build Germany weapon pages
npm run build:fr    # Build French weapon pages
npm run build:it    # Build Italian weapon pages
npm run build:jp    # Build Japanese weapon pages
npm run build:ru    # Build Russian (CCCP) weapon pages
npm run build:uk    # Build British weapon pages
npm run build:us    # Build American weapon pages
```

3. Duplicate the new datasource and pictue files to its twin-project __[gp-site-wwii](https://vincentzhcn.coding.net/p/gp-site-wwii)__ by [w2p.py](./w2p.py)
    Check out usage and more details in [w2p.py](./w2p.py).

4. Shift to project __[gp-site-wwii](https://vincentzhcn.coding.net/p/gp-site-wwii)__ and build, deploy to Internet.

## Milestones

- 18 Jan 2024, Project update, rebuild and test. Result: OK! 😊

- 15 Oct 2020, The content of website **[wp.wwii.site](http://wp.wwii.site)** update suspended.

- 24 Nov 2019, The project has been migrated to my custom domain **[wp.wwii.site](http://wp.wwii.site)**.

- 15 Nov 2019, Resolved 'require' issue, App upgraded to v1.6 :smile:.

- 11 Jul 2019, App renamed to 'wp-site-wwii'.

- 20 Jan 2019, Project started.
