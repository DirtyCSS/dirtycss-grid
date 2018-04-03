# Dirtycss - GRID
Dirtycss grid is CSS grid framework based on flexbox. We also plan to provide full support for all popular JS frameworks
such us React, Angular, Vue etc. In our code, we try to completely adhere to the `BEM` syntax.

In the near future we will add new features on grid layouts.

## What's included in the current release
* `Containers` - container is a simple wrapper for content. It has two states: `.container` (fluid) and `.container--strict`(responsive pixel width);
* `Rows` - columns container with a lot of tasty modificators;
* `12 columns system` - out grid have classic 12 columns system. The columns have several dimensions and many interesting modifiers;

**More detailed documentation will be at the `beta` release stage.**

## Build and modify
In current stage our grid have a simple build system. It is enough to have an established `Nodejs` and `npm`.

At first:
`git clone https://github.com/DirtyCSS/dirtycss-grid.git` or your fork.

Then:
`yarn` or `npm install`

Build SCSS sources code:
`gulp styles`
