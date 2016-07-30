_ = require 'lodash'
{ Collection, Vertex, Edge, Line, Text } = require 'components'
{ Algorithm, State } = require '../Algorithm/Algorithm'

module.exports =
class BasicGraph extends Algorithm
    defaultSubscript: ''
    numRow: 0
    numColumn: 0
    numVertex: 0
    numEdge: 0

    maxId: 0
    startNode: 0
    circleR: 15
    deltaWeightVertex: 15

    constructor: ->
        super
        @adjList = []
        @valueGraph = []
        @coloredEdge = (false for [0...@numVertex])
        @vertices = []

        @node = []

    # 按照层次遍历整个图
    travLevel: ->
        @queue = []
        @flag = (false for [0 ... @numVertex])
        pos = 0

        @queue.push @node[@startNode]
        @flag[@startNode] = true

        while pos < @queue.length
            @current = @queue[pos]
            for { v, w } in @adjList[@current.id]
                if not @flag[v]
                    # console.log @current
                    @flag[v] = true
                    @queue.push @node[v]
            pos += 1
        @queue

    genVertexes: ->
        vertexes = new Collection 'vertices'
        for { value, x, y, id } in @travLevel()
            vertexes[id] = new Vertex
                id: id
                content: value
                x: x
                y: y
                subscript: new Text
                    id: id
                    x: @deltaWeightVertex
                    y: @deltaWeightVertex
                    content: @defaultSubscript
                    fontStyle: 'italic'
        vertexes


    duplicateState: (oldState) ->
        vertexes = @genVertexes()
        state = new State
        state.codes = oldState.codes.clone()
        state.vertices = vertexes

        for edge, key in oldState.edges when edge
            state.edges[key] = edge.clone().status ''

        for vertex, key in oldState.vertices when vertex
            state.vertices[key] = vertex.clone().status ''

        state

    genInitState: (codes = [], initStatus = '') ->
        if @hasState
            state = @duplicateState @lastState
            state.codetrace codes, [], initStatus
            return state

        vertexes = @genVertexes()
        state = new State
        state.vertices = vertexes

        maxLineId = 0

        # for i in [0 ... @numRow]
        #     for j in [0 ... @numColumn] when @adjList[i][j] >= 1
        for u in [0...@numVertex]
            for { v, w } in @adjList[u]
                maxLineId += 1
                edge = new Edge
                    id: maxLineId
                    startVertexId: u
                    endVertexId: v
                    type: Line.UNDIRECT
                    content: w

                edge.updatePosition
                    cx1: @node[u].x
                    cy1: @node[u].y
                    r1: @circleR
                    cx2: @node[v].x
                    cy2: @node[v].y

                for obj in @deltaEdgeWeightLocation
                    if obj.u is u and obj.v is v
                        edge.text.attr
                            x: edge.state.cx + obj.deltaX
                            y: edge.state.cy + obj.deltaY

                state.edges[maxLineId] = edge
                @valueGraph[u][v] = maxLineId

        state.codetrace codes, [], initStatus
        state
