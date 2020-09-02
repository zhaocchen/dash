function cloneDeep(obj) {
    if (typeof obj != 'object') return obj;
    if (obj instanceof Array) return obj.slice();
    var res;
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];
        if (typeof val != 'object') {
            res[key] = obj[key]
        } else {
            res[key] = cloneDeep(obj[key])
        }
    }
    return res;
}

