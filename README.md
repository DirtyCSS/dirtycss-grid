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

**Gutter modifiers:**

Provides different gutter to row and cols.

* `.row--sm` - small gutter (5px)
* `.row--md` - medium gutter (15px)
* `.row--lg` - large gutter (30px)
* `.row--xl` - xl gutter (50px)

**Vertical alignment modifiers:**

* `.row--top` - aligning columns by top
* `.row--middle` - aligning columns by center
* `.row--bottom` - aligning columns by bottom

**Horizontal alignment modifiers:**

* `.row--left` - aligning columns by left
* `.row--center` - aligning columns by center
* `.row--right` - aligning columns by right

**Justify:**

* `.row--space-between` - space between columns
* `.row--space-around` - space around columns

**Reverse order:**

* `.row--reverse` - reverse column order

### Columns
In a grid layout, content must be placed within columns and only columns may be immediate children of rows. Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns.

**Basic `.col`:**

A column without any modifiers has an automatic width. If a row uses one column, it occupies the width of the entire block, if there are from 2 to 12 columns in the line, then the width of the columns will be the same relative to each other.

**Column sizes:**

To ensure the responsiveness of the columns, we use modifiers: `xs, sm, md, lg, xl`, where is a `media queries` breakpoints. Below is a list of column modifiers and breakpoints points used in our grid system.

* `.col--xs-1` - `.col--xs-12` - extra small, from `0` and above
* `.col--sm-1` - `.col--sm-12`  - small, from `576px` and above
* `.col--md-1` - `.col--md-12` - medium, from `768px` and above
* `.col--lg-1` - `.col--lg-12` - large, from `992px` and above
* `.col--xl-1` - `.col--xl-12` - large, from `1200px` and above

**Changing the order of the columns:**

Also in our system, you can change the order of the columns using modifiers. To do this, add a modifier with the sequence number for the column.

* `.col--order-1` - `.col--order-12`

**Column modifiers:**

* `.col--top` - align self top
* `.col--middle` - align self middle
* `.col--bottom` - align self bottom

## Build and modify
In current stage our grid have a simple build system. It is enough to have an established `Nodejs` and `npm`.

At first:
`git clone https://github.com/DirtyCSS/dirtycss-grid.git` or your fork.

Then:
`yarn` or `npm install`

Build SCSS sources code:
`gulp styles`
