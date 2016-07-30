# CSVisFrame

## Getting Started

### Dependencies

1. jQuery (global)
2. CodeMirror

### Getting the Source

```bash
git clone git@github.com:Jisuanke/CSVisFrame.git
```

### Build

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
CSVisFrame = require 'CSVisFrame'

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
