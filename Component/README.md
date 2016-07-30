# Component

## Getting Started

### Building `Component`

```bash
npm install
npm run build
```

### Usage

If you are using browserify to bundle your modules, use [aliasify](https://github.com/Jisuanke/viz-components.git
https://github.com/benbria/aliasify) to redirect `require('components')` to `./bower_component/viz-components/dist/index.min.js`; for rollup.js users, you can use [rollup-plugin-alias](
scripts/rollup-plugin-alias.coffee) for the same effect.

### API

All components live in the top module namespace. For example, to create a new `vertex`, you can write

```coffee-script
# Remember to set up the alias
Components = require 'components'

# Let's first set up Components
Components.config
  parentNode: document.getElementById '#svg'
  colors:
    # For example, if we want to override the default color setting
    # for flagged elements:
    flagged: '#DE3E1E'

# We set up a Collection (group) to store all our vertices.
{ Collection, Vertex } = Components
vertices = new Collection 'vertices'

# and then add a new element:
vertices[0] = new Vertex
  id: 1
  fill: '#ABABAB'
  content: 'A'

# Finally, we draw the vertex within a duration of 750ms.
# It should appear in the page now.
vertices.draw 750
```
