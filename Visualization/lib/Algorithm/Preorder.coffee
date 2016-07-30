BasicBinaryTree = require '../structure/BasicBinaryTree'
{ Vertex } = require 'components'

rootY = 50     #根节点的Y坐标
rootX = 400     #根节点的X坐标
gapY = 70       #相邻两层的Y之差
gapX = 400

class Node
    leftChild: null
    rightChild: null
    depth: 0
    constructor: (@value, @id, @parent, @isLeft, @x, @y) ->
        if @parent?
            @depth = @parent.depth + 1
            if @isLeft
                @parent.leftChild = this
            else
                @parent.rightChild = this
        else
            @y = rootY
            @x = rootX

module.exports =
class Preorder extends BasicBinaryTree
    constructor: (model) ->
        super()

        @maxId = 0
        @root = []
        @node = []
        @numEdge = model.numEdge
        @vertex = model.binarytreeVertex
        @root  = new Node @randomChar, @maxId, null, false, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @root, true, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @root, false, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @node[1], true, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @node[1], false, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @node[2], true, @vertex[@maxId][1], @vertex[@maxId][2]
        @node[@maxId += 1] = new Node @randomChar, @maxId, @node[2], false, @vertex[@maxId][1], @vertex[@maxId][2]
        for prt in [@node[3], @node[4], @node[5], @node[6]]
            @node[@maxId += 1] = new Node @randomChar, @maxId, prt, true, @vertex[@maxId][1], @vertex[@maxId][2]
            @node[@maxId += 1] = new Node @randomChar, @maxId, prt, false, @vertex[@maxId][1], @vertex[@maxId][2]
        @initState = @genInitState()
        
    run: ->
        codes = '''
            preorder root
              visit root.value
              if root.leftChild != null
                preorder root.leftChild
              if root.rightChild != null
                preorder root.rightChild
              return
        '''
        state = @genInitState codes, '[任务] 前序遍历'
        @addState state
        isRoot = true
        node = @root
        stack = []
        preid = @root.id
        numVisited = -1
        while node
            break if stack.length <= 0 and not isRoot
            # break if numVisited == @maxId
            # 将回溯时，被回溯的节点变回绿色
            # 访问当前节点，将其设为红色，表示被访问
            state = state.clone()
            state.vertices[preid].status 'visited'
            state.vertices[node.id].status 'visiting'
            state.codetrace [0], "访问 #{node.value}"
            @addState state

            # 访问当前节点，将其设为绿色，表示被输出
            state = state.clone()
            state.vertices[node.id].status 'visited'
            state.codetrace [1], "输出 #{node.value}"
            @addState state
            numVisited++
            # 如果 node 左子树不为空，将 node 压入栈中，前序遍历 node 左子树
            if node.leftChild
                unless node.leftChild.flag
                    stack.push node
                    state = state.clone()
                    state.codetrace [2], '判断左子树是否为空'
                    @addState state

                    state = state.clone()
                    state.codetrace [3], '左子树不为空，前序遍历左子树'
                    @addState state
                    # node.flag = true
                    node = node.leftChild
                    continue
            # 如果 node 右子树不为空，将 node 压入栈中，前序遍历 node 右子树
            if node.rightChild
                unless node.rightChild.flag
                    stack.push node
                    state = state.clone()
                    state.codetrace [2], '判断左子树是否为空'
                    @addState state

                    state = state.clone()
                    state.codetrace [4], '左子树为空，判断右子树是否为空'
                    @addState state

                    state = state.clone()
                    state.codetrace [5], '右子树不为空，前序遍历右子树'
                    @addState state
                    # node.flag = true
                    node = node.rightChild
                    continue

            state = state.clone()
            state.codetrace [2], '判断左子树是否为空'
            @addState state

            state = state.clone()
            state.codetrace [4], '左子树为空，判断右子树是否为空'
            @addState state

            state = state.clone()
            state.codetrace [6], '右子树为空，回溯'
            @addState state
            # 如果 node 为 root, 回溯到合适的位置
            while true
                node.flag = true
                preid = node.id
                break if stack.length <= 0
                isRoot = false
                node = stack.pop()
                # 如果出栈节点有右子树且右子树未被遍历
                if node.rightChild?
                    unless node.rightChild.flag
                        stack.push node
                        state = state.clone()
                        state.vertices[node.id].status 'visiting'
                        state.codetrace [3], "回溯到 #{node.value}"
                        state.vertices[preid].status 'visited'
                        # state.codetrace [3], "右子树为空，回溯到前驱节点"
                        @addState state

                        state = state.clone()
                        state.codetrace [4], '判断右子树是否为空'
                        @addState state

                        state = state.clone()
                        state.codetrace [5], '右子树不为空，前序遍历右子树'
                        @addState state
                        preid = node.id
                        # 将前序遍历node右子树
                        node = node.rightChild
                        break

                # 如果出栈节点无右子树或右子树已被遍历
                unless node.rightChild
                    state = state.clone()
                    state.vertices[node.id].status 'visiting'
                    state.codetrace [3], "回溯到 #{node.value}"
                    state.vertices[preid].status 'visited'
                    @addState state

                    state = state.clone()
                    state.codetrace [6], "回溯到 #{node.value}"
                    @addState state
                else
                    if node.rightChild and node.rightChild.flag
                        state = state.clone()
                        state.vertices[node.id].status 'visiting'
                        state.codetrace [5], "回溯到 #{node.value}"
                        state.vertices[preid].status 'visited'
                        @addState state

                        state = state.clone()
                        state.codetrace [6], "回溯到 #{node.value}"
                        @addState state

                preid = node.id
                break if stack.length <= 0
                continue
        state = @duplicateState @root, state
        state.codetrace [], [], '先序遍历完成'
        @addState state
        this
