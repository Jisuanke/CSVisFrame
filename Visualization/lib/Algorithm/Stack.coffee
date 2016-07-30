{ Collection, Line, Rectex } = require 'components'
{ Algorithm, State } = require './Algorithm'

module.exports =
class Stack extends Algorithm
    leftX: 300
    rightX: 400
    topY: 100
    bottomY: 350

    newRectX: 130
    gap: 10
    rectWidth: 80
    rectHeight: 25
    rx: 2

    maxId: 0

    constructor: (numbers) ->
        super()

        @stack = for number, index in numbers
            value: number
            id: index

        @initState = @genInitState()

    genInitState: (codes = [], initStatus = '') ->
        if @hasState
            state = @lastState.clone()
            state.codetrace [], initStatus
            return state
        state = new State
        @leftLine = new Line
            id: 1
            x1: @leftX
            y1: @topY
            x2: @leftX
            y2: @bottomY

        @rightLine = new Line
            id: 2
            x1: @rightX
            y1: @topY
            x2: @rightX
            y2: @bottomY

        @bottomLine = new Line
            id: 3
            x1: @leftX
            y1: @bottomY - 1.325
            x2: @rightX
            y2: @bottomY - 1.325

        # 表示栈的左侧、右侧、底部的三条线段，这里用的是引用而不是深拷贝，因为这三条线段在任何状态中都不会改变。
        state.lines[0] = @leftLine
        state.lines[1] = @rightLine
        state.lines[2] = @bottomLine

        @count = 0
        # 每一个stack中的元素，对应一个固定大小的矩形和矩形中的一个文本
        for element in @stack
            @count += 1
            @maxId = element.id if element.id > @maxId

            x = (@rightX + @leftX) / 2
            y = @bottomY - (@gap + @rectHeight) * @count + @rectHeight / 2

            rectex = new Rectex
                id: element.id
                x: x
                y: y
                content: element.value
                height: @rectHeight
                width: @rectWidth
                rx: @rx

            state.rectex[element.id] = rectex

        state.codetrace codes, [], initStatus
        return state

    pushBack: (number) ->
        codes = []
        state = @genInitState codes, "[任务] 将数字 #{number} 加入到栈"
        @addState state
        # 生成number对应的矩形和文本
        @maxId += 1
        state = state.clone()

        x = @newRectX + @rectWidth / 2
        y = @bottomY - @gap - @rectHeight / 2

        rectex = new Rectex
            id: @maxId
            x: x
            y: y
            content: number
            status: 'visited'
            height: @rectHeight
            width: @rectWidth
            rx: @rx

        state.rectex[@maxId] = rectex
        # 将旧的状态中加上该文本，并将其隐藏，这样才能保证回退时不出问题
        @states.forEach (oldState) =>
            oldState.rectex[@maxId] = rectex.clone().hide()

        state.codetrace [], "获取数字 #{number}"
        @addState state

        # 将矩形和文本移动到栈区域的上方
        state = state.clone()
        state.rectex[@maxId].attr
            x: (@leftX + @rightX) / 2
            y: @topY - @rectHeight / 2

        state.codetrace [], "将数字 #{number} 推入栈顶"
        @addState state

        @stack.push
            value: number
            id: @maxId

        # 移动到栈顶的位置
        state = state.clone()
        state.rectex[@maxId].attr
            x: (@leftX + @rightX) / 2
            y: (@bottomY - @stack.length * (@rectHeight + @gap) + @rectHeight / 2)

        state.rectex[@maxId].status ''
        state.codetrace [], "将数字 #{number} 推入栈顶完毕"
        @addState state
        return


    # push一个number到stack的顶部
    push: (numbers) ->
        if Array.isArray numbers
            for number in numbers
                @pushBack number
        else
            @pushBack numbers

    # 将stack顶部的数弹出
    pop: ->
        codes = []
        if @stack.length is 0
            @states.push (state = @genInitState codes, '栈是空的')
            return
        @states.push (state = @genInitState codes, '[任务] 将栈顶数字元素弹出')

        @topElement = @stack.pop()
        # 将栈顶元素标记
        state = state.clone()
        state.rectex[@topElement.id].status 'visited'
        state.codetrace [], "当前栈顶元素是数字 #{@topElement.value} 所在的元素"
        @addState state

        # 将该元素弹出
        state = state.clone()
        state.rectex[@topElement.id].attr
            x: (@leftX + @rightX) / 2
            y: @topY - @rectHeight / 2

        state.codetrace [], '将目标栈顶元素弹出栈结构'
        @addState state

        # 让该元素消失
        state = state.clone()
        state.rectex[@topElement.id].hide()
        state.codetrace [], '栈顶元素弹出完毕'
        @addState state
        return
