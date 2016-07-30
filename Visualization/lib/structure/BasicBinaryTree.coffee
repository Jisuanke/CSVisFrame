{ Vertex, Collection, Edge, Line } = require 'components'
{ COLOR: { BLACK } } = require 'constants'
{ Algorithm, State } = require '../Algorithm/Algorithm'

module.exports =
class BinaryTree extends Algorithm
    maxId: 0
    circleR: 19
    textSize: 21
    maxLineId: 0

    constructor: ->
        super
        @root = []

    # 获得以 root 为根节点的二叉树的层次遍历序列
    travLevel: ->
        queue = []
        if @root?
            queue.push @root
            pos = 0
            while pos < queue.length
                { leftChild, rightChild } = queue[pos]
                queue.push leftChild if leftChild?
                queue.push rightChild if rightChild?
                pos += 1
        return queue

    # 按照层次遍历的顺序，根据节点的属性值生成所有的 vertex，返回一个 vertexes 对象
    genVertexes: ->
        vertexes = new Collection 'vertices'
        queue = @travLevel @root
        for { id, x, y, value } in queue
            vertexes[id] = new Vertex
                id: id
                content: value
                x: x
                y: y

        return vertexes

    # 调用 genVertexes 生成所有的 vertex，把所有的 vertex 加入到 state
    # 对象中，再把 oldState 中的所有 edge 深拷贝到 state 中，并将这些 edge
    # 的颜色设为黑色。同时带有清除颜色的功能。如果希望拷贝之前的状态并清除颜色，
    # 也使用这个函数。
    duplicateState: (oldState) ->
        state = new State
        state.codes = oldState.codes.clone()
        vertexes = @genVertexes()
        state.vertices = vertexes
        for edge, key in oldState.edges when edge
            state.edges[key] = edge.clone().status ''

        # Add vertices from previous states to ensure
        # animations are correct when played backwards
        for vertex, key in oldState.vertices when vertex and key not of vertexes
            state.vertices[key] = vertex.clone().hide()

        return state

    genInitState: (codes = [], initStatus = '') ->
        if @hasState
            state = @duplicateState @lastState
            state.codetrace codes, [], initStatus
            return state

        state = new State
        # 生成所有vertex，加入到state对象中
        vertexes = @genVertexes @root
        state.vertices = vertexes
        # 生成所有edge，加入到state对象中
        @maxLineId = -1
        travQueue = @travLevel @root
        for current in travQueue
            if current.leftChild?
                @maxLineId += 1

                edge = new Edge
                    id: @maxLineId
                    startVertexId: current.id
                    endVertexId: current.leftChild.id
                    type: Line.UNDIRECT

                edge.updatePosition
                    cx1: current.x
                    cy1: current.y
                    cx2: current.leftChild.x
                    cy2: current.leftChild.y

                state.edges[@maxLineId] = edge

            if current.rightChild?
                @maxLineId += 1
                offset = 0.75

                edge = new Edge
                    id: @maxLineId
                    startVertexId: current.id
                    endVertexId: current.rightChild.id
                    type: Line.UNDIRECT

                edge.updatePosition
                    cx1: current.x - offset
                    cy1: current.y - offset
                    r1: @circleR
                    cx2: current.rightChild.x + offset
                    cy2: current.rightChild.y + offset

                state.edges[@maxLineId] = edge

        state.codetrace codes, [], initStatus
        return state


    # 交换两个节点的值，注意id也要一起交换
    swap: (node1, node2) ->
        tmp = node1.value
        node1.value = node2.value
        node2.value = tmp
        tmp = node1.id
        node1.id = node2.id
        node2.id = tmp

    # 交换两个节点时，state中与它们相连的边应该发生的变化，即将其起点和终点id更改为交换后的id
    swapVertexId: (state, node1, node2) ->
        vertexId1 = node1.id
        vertexId2 = node2.id
        for edge in state.edges when edge
            if edge.props.startVertexId is vertexId1
                edge.props.startVertexId = vertexId2
            else if edge.props.startVertexId is vertexId2
                edge.props.startVertexId = vertexId1
            if edge.props.endVertexId is vertexId1
                edge.props.endVertexId = vertexId2
            else if edge.props.endVertexId is vertexId2
                edge.props.endVertexId = vertexId1

    # 在以root为根节点的树中，返回target节点的直接后继，若没有则返回null
    getSuccessor: (root, target) ->
        queue = []
        succ = (node) ->
            if node?
                succ node.leftChild
                queue.push node
                succ node.rightChild
        succ root
        for i in [0...queue.length]
            if queue[i].id is target.id and i < queue.length - 1
                return queue[i + 1]
        return null

    # return the precursor of Vertex-target, return null if there if no precursor.
    getPrecursor: (root, target) ->
        queue = []
        pre = (node) ->
            if node?
                pre node.rightChild
                queue.push node
                pre node.leftChild
        pre root
        for i in [0...queue.length]
            if queue[i].id is target.id and i < queue.length - 1
                return queue[i + 1]
        null
