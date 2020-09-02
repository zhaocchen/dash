
function isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) == 'object';
}

function cloneDeep(obj) {
    var isArray = Array.isArray(obj);
    var cloneObj = isArray ? obj.slice() : {...obj};
    Reflect.cloneDeep(cloneObj).forEach(key => {
        cloneObj[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key];
    })
    return cloneObj;
}