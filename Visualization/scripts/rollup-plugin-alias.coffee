module.exports = (options = {}) ->
    resolveId: (importee, importer) ->
        for own key, val of options
            matched =
                if typeof key is 'string'
                then importee is key
                else key.test importee
            if matched
                return importee.replace key, val
        null
