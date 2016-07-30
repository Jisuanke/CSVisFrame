DisjointSet = require '../structure/DisjointSet'
BasicGraph = require '../structure/BasicGraph'

rootY = 100
rootX = 600
gapY = 80
gapX = 300

module.exports =
class Kruskal extends BasicGraph
    # 建图过程
    constructor: (model) ->
        super
        @numRow = model.numVertex
        @numColumn = model.numVertex
        @numVertex = model.numVertex
        @deltaEdgeWeightLocation = model.deltaEdgeWeightLocation
        @numEdge = model.numEdge

        # 定义邻接表
        @adjList = model.graphAdjList

        # 定义一个二维数组，记录两点之间边的编号
        @valueGraph = (0 for [0...@numRow] for [0...@numColumn])

        @maxId = -1
        for vertex in model.graphVertex
            @node[vertex[0]] =
                value: @randomChar
                id: @maxId += 1
                x: vertex[1]
                y: vertex[2]

            @vertices.push @node[vertex[0]].id
        @adjList = model.graphAdjList

        @initState = @genInitState()
    run: ->
        codes = '''
                    Sort E edges by increasing weight
                    T = {}
                    foreach edge ∈ edgeList
                      if adding edge does not form a cycle
                        add edge to T
                      else ignore edge
                    T is an MST
                '''
        minimumSpanningTree = 0.0
        sortedEdges = []
        value = 1
        for u in [0...@numVertex]
            for { v, w } in @adjList[u]
                sortedEdges.push [u, v, w]
        set = new DisjointSet @vertices
        sortedEdges.sort (a, b) -> a[2] - b[2]

        state = @genInitState codes, '[任务] Kruskal 算法演示'
        @addState state
        for edge in sortedEdges
            if set.find(edge[0]) isnt set.find(edge[1])
                state = state.clone()
                state.codetrace [2], '枚举边集数组中的边 E'
                state.edges[@valueGraph[edge[0]][edge[1]]].status 'visiting'
                state.vertices[edge[0]].status 'visiting'
                state.vertices[edge[1]].status 'visiting'

                @addState state

                state = state.clone()
                state.codetrace [3], '判断将 E 加入集合后是否构成环'
                @addState state

                state = state.clone()
                state.codetrace [4], '不构成环，将 E 加入集合中'
                state.edges[@valueGraph[edge[0]][edge[1]]].status 'visited'
                state.vertices[edge[0]].status 'visited'
                state.vertices[edge[1]].status 'visited'
                @addState state

                minimumSpanningTree += edge[2]
                set.union(edge[0], edge[1])
                continue
            else
                state = state.clone()
                state.codetrace [2], '枚举边集数组中的边 E'
                state.edges[@valueGraph[edge[0]][edge[1]]].status 'visiting'
                @addState state

                state = state.clone()
                state.codetrace [3], '判断将 E 加入集合后是否构成环'
                @addState state

                state = state.clone()
                state.codetrace [5], '构成环，忽略 E'
                state.edges[@valueGraph[edge[0]][edge[1]]].status 'ignored'
                @addState state
        state = state.clone()
        state.codetrace [6], 'Kruskal 算法演示完成'
        @addState state
