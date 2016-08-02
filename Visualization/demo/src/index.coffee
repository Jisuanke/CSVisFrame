model = require '../model'
url = require 'url'
Vue = require 'vue'

codemirror = CodeMirror document.querySelector '#codetrace',
    mode: 'csvisframe'
    readOnly: true

codemirror.setOption 'theme', 'monokai'

# Here we pass configurations
CSVisFrame.config
    # Containers are passed straight to jQuery, so feel
    # free to pass anything that jQuery accepts.
    codemirror: codemirror
    speed: 1200
    containers:
        SVG: '#viz'
        guide: '#guide'
        progressBar: '#progress-bar'
        player: '#player'

# After the configurations are passed, CSVisFrame creates
# all the nodes and the CodeMirror editor instance, and
# we call `mount` and make them appear in the page.
CSVisFrame.mount()

player = CSVisFrame.player
viz = url.parse(document.URL, true).query.viz

###
Algorithms live in the CSVisFrame namespace. They have their
own methods relevant to the algorithm itself, like BST has
insert, remove and whatnot. Their common interface is:

hasState: boolean
   Returns true unless States list is empty.

States: Array<State>
   This array is populated after a method is called on the algorithm, and
   can be cleared manually by us. Each State implements a `draw` method that
   takes (duration: number) argument to draw everything it contains to the
   SVG container.

Algorithms come with their animation functions, which unfortunately aren't
thoroughly tested at this point. Nevertheless it should be fairly easy to
implement a custom and more powerful player if it is desired so.

play :: (interval: number) -> Algorithm           (chainable)
   Plays the States list at `interval` miliseconds per step.

pause :: () -> Algorithm                          (chainable)
   Pauses the animation.

reset :: () -> Algorithm                          (chainable)
   Stops the animation and set the step to 0.
   Currently this method does NOT draw the first State.

step: number
   Returns the current State step in animation.

###

window.player = player

mount = (algo) ->
    player.mount algo
    window.algo = algo

switchViz = (name) ->
    switch name
        when 'Stack'
            stack = new CSVisFrame.Stack model.Stack
            mount stack

        when 'Kruskal'
            kruskal = new CSVisFrame.Kruskal model.Kruskal
            kruskal.run()
            mount kruskal

    return


# Router
routie 'demo/:name', (name) ->
    switchViz name
