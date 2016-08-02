fs = require 'fs'
babel = require 'babel-core'
config = require './rollup-config'
UglifyJS = require 'uglify-js'
{ rollup } = require 'rollup'

rollup(config).then (bundle) ->
    bundle.generate
        format: 'umd'
        moduleName: 'CSVisFrame'
        indent: '\t'
        intro: 'var __DEV__ = false, global = window;'

.then (res) ->
    UglifyJS.minify res.code,
        fromString: true
        mangle: true
        mangleProperties: regex: ///
            #
            # Here are some of the property names that should NOT be mangled:
            #
            # 1. JavaScript language specific names
            #    This includes `length`, `prototype`, `forEach`, etc. Pay special attention
            #    to DOM property names like `parentNode` and `remove`.
            #
            # 2. jQuery library specific names
            #
            # 3. Properties accessed with a string (regardless of where in the project)
            #    This happens when we use lodash methods like _.sumBy(nodes, 'keys')
            #    where lodash will look for properties `keys` of each elements in nodes.
            #    Since UglifyJS will only mangle property name but not this string,
            #    the runtime WILL complain about xxx.keys undefined, because `keys` has
            #    already been renamed to something shorter.
            #
            # 4. Public API methods exposed to Jisuanke.com main site
            #    This includes every name in `/lib/index.js`. Doing so will result in
            #    an unusable API.
            #
            # This list is obviously not exhaustive. Please remember to do a thorough
            # test whenever you add new keywords here, because bugs may pop up unexpectedly.
            #
            ^(
                gen
                |RED|BLACK|YELLOW|GREEN|BLUE|BLACK|WHITE|ORANGE|COLOR|GREY # Colors
                |UNDIRECT|DIRECT|BIDIRECT|ARROW|REFX                # Constants
                |defaultP|componentN|tagN|propagate         # Components
                |ignoreContent|created|getAttributes|isComponent
                |edges|verti|valueG|rects|collec|texts   # Collections
                |valueGraph|color|circleR|maxId   # Algorithms
                |head|first|vertex|isLeft|leftC|rightC
                |((start|end)VertexId)|cx|cy|line|flag|startN
                |root|maxLineId|initState|heap|state|content|travQ|queue
                |Vertex|Line|Text|Rect|Circle|Edge
                |Algorithm|Collection|State|props
                |x[12]|y[12]|sortObj|bottom[XY]|top[XY]|left[XY]
                |right[XY]|gap|bottom[XY]|list|((top|right|bottom)Line)
                |rect[HW]|subscript|addState|codetrace|clone|paint
                |create(Vertex|Edge)|charList|swapVertexId|calcXY|updatePosition
                |highlight|updateParent|getSuccessor|searchElement|set(Left|Right)Child

                |__super__                  # CoffeeScript
                |classCallCheck|createClass # Babel
                |$el|$doc|$par
            )|(^node[0-9])
        ///
        compress:
            unused: true
            dead_code: true
            drop_console: true
            drop_debugger: true
            screw_ie8: true
    .code

.then (code) ->
    fs.writeFileSync './build/csvisframe.js', code
.then ->
    console.log 'Success.'
.catch (err) ->
    console.warn err
    if err and err.codeFrame
        console.log err.codeFrame
    return
