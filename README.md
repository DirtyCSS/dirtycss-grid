# Dirtycss - GRID
Dirtycss grid is CSS grid framework based on flexbox. We also plan to provide full support for all popular JS frameworks
such us React, Angular, Vue etc. In our code, we try to completely adhere to the `BEM` syntax.

In the near future we will add new features on grid layouts.

## Quick start
Several ways for a quick start:
* Install with `npm` - `$ npm install dirtycss-grid --save`
* Install with `yarn` - `$ yarn add dirtycss-grid`
* Clone repo - `$ git clone https://github.com/DirtyCSS/dirtycss-grid.git`

## Documentation
In the current version is implemented a classic grid with a lot of flexible modifiers. 

**Main supported browsers:**
* IE 11+
* FireFox 30+
* Chrome 21+
* Safari 7+

### Containers
Containers provide a means to center and horizontally pad your site’s contents. 

* `.container` - base class, provide full-width with left and right inner indents.
* `.container--strict` - this is `.container` modifier that provide responsive pixel width.

### Rows
Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.

Rows contain the main flex styles for aligning the columns.

**Modifiers:**
* `.row--sm` - small gutter (5px)
* `.row--md` - medium gutter (15px)
* `.row--lg` - large gutter (30px)
* `.row--xl` - xl gutter (50px)

## Build and modify
In current stage our grid have a simple build system. It is enough to have an established `Nodejs` and `npm`.

At first:
`git clone https://github.com/DirtyCSS/dirtycss-grid.git` or your fork.

Then:
`yarn` or `npm install`

Build SCSS sources code:
`gulp styles`
