System.config({
    map: {
        codemirror: [
            'npm:codemirror/lib/codemirror',
            'npm:codemirror/theme/monokai.css'
        ],
        'codemirror/csvisframe': 'grammar',
        jquery: 'npm:jquery/dist/jquery.min.js',
        csvisframe: '../build/csvisframe',
        jisuanui: [
            './static/jisuanui.min.js',
            './static/jisuanui.min.css'
        ]
    }
})
