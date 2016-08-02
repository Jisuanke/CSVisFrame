# CSVisFrame

This is the source code of `CSVisFrame: A Framework for Interactive Visualizations of Abstract Concepts in Computer Science`

## Online Page

The demo page will come online in one week.

## Getting Started

### Getting the source

```bash
git clone git@github.com:Jisuanke/CSVisFrame.git
```
>This repo include two modules, `Component` and `Visualization`.

## For `Component`

### Build `Component`
```bash
npm install
npm run build
```
### Usage

If you are using browserify to bundle your modules, use [aliasify](https://github.com/benbria/aliasify) to redirect `require('components')` to `../Component/dist/index.min.js`; for rollup.js users, you can use [rollup-plugin-alias](
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

## For `Visualization`

### Build `Visualization`

```bash
# Install CoffeeScript and bower globally
npm install -g coffee-script
npm install -g bower

# Install dependencies and build demo page
npm install
gulp

# Build CSVisFrame for development (for use with modern browsers)
cake build

# Build CSVisFrame for production (minified and converted to ES5)
cake production

# Update the version number (only used when production)
cake bump
```

The builder mentioned above automatically produces the following files:

1. `/lib/Algorithm/index.js`


### API

```coffeescript
CSVisFrame = require 'csvisframe'

# Create a CodeMirror instance
codemirror = CodeMirror.fromTextArea ...

CSVisFrame.config

  # CodeMirror instance for pseudocodes
  codemirror: codemirror

  # Specify the time taken to finish transition to one state
  speed: 1200

  # Containers are passed straight to jQuery, so feel
  # free to pass anything that jQuery accepts.
  # N.B. Anything inside these nodes *will* be removed.

  containers:
    # Algorithm Demonstration
    SVG: '#viz'

    # Instruction
    guide: '#guide'

    # Progress Bar Slider
    # or with empty div
    progressBar: '#progress-bar'

    # Media Player Control
    player: '#player'

# Now we have finished configuring CSVisFrame. Let's initialize
# an algorithm demo.

# `queue` starts with members 10, 11, 12
queue = new CSVisFrame.Queue [10, 11, 12]

# Let's push three more members
queue.enqueue [20, 21, 22]

# ... and dequeue two of them
queue.dequeue()
queue.dequeue()

# Now `queue` has generated a list of states (animation frames).
# We tell CSVisFrame that we will play this specific list of states by
player = CSVisFrame.player
player.mount queue

# At this point, the user can control the animation by clicking
# play, pause, forward, backward, stop and dragging the slider.
# If you need to manually control the animation status. You can
player.play()
player.pause()
player.stop()
player.forceNext()      # Go to next step
player.forcePrevious()  # Go to previous step

```
