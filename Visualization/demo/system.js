(function(global, factory) {
    global.System = global.System || {};

    var has$ = {}.hasOwnProperty;
    function extend(target, source) {
        for (var key in source) {
            if (has$.call(source, key)) {
                target[key] = source[key];
            }
        }
        return target;
    }

    var System = factory(extend);
    extend(global.System, System);

})(this, function (extend) {

    var map = Object.create(null);

    function _import() {
        for (var i = 0; i < arguments.length; i++) {
            var url = arguments[i];

            if (url in map) {
                url = map[url];
            }

            if (Array.isArray(url)) {
                _import.apply(this, url);
                continue;
            }

            if (!/\.[a-z]+$/.test(url)) {
                url += '.js';
            }

            url = url.replace(/^npm:/, '../node_modules/');

            if (url.indexOf('.js') > -1) {
                document.write('<script src="' + url + '"></script>');
            } else if (url.indexOf('.css') > -1) {
                document.write('<link rel="stylesheet" href="' + url + '">');
            }
        }
    }

    function config(obj) {
        if (obj && obj.map) {
            extend(map, obj.map);
        }
    }

    return {
        'import': _import,
        config: config
    };
});
