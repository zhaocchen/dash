function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

// 支持

function isObject(obj) {
  return (typeof obj == "object" || typeof obj == "function") && obj != null;
}
function isFunction(obj) {
  return typeof obj == "function";
}
function isArray(obj) {
  return Array.isArray(obj);
}
function isDate(obj) {
  return getType(obj) == "Date";
}
function isMap(obj) {
  return getType(obj) == "Map";
}
function isSet(obj) {
  return getType(obj) == "Set";
}
function isRegExp(obj) {
  return getType(obj) == "RegExp";
}

function cloneDeep(obj, weakMap = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (weakMap.get(obj)) return weakMap.get(obj);

  if (isFunction(obj)) {
    let res = null;
    const funcString = obj.toString();
    if (obj.prototype) {
      const bodyReg = /(?<={)(.|\n)+(?=})/m;
      const paramReg = /(?<=\().+(?=\)\s+{)/;
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
        if (param) {
          const paramArr = param[0].split(",");
          res = new Function(...paramArr, body[0]);
        } else {
          res = new Function(body[0]);
        }
      }
    } else {
      res = eval(funcString);
    }
    weakMap.set(obj, res);
    return res;
  }

  if (isArray(obj)) {
    let res = [];
    for (let val of obj) {
      res.push(cloneDeep(val, weakMap));
    }
    weakMap.set(obj, res);
    return res;
  }

  if (isDate(obj)) {
    let res = new obj.constructor(obj);
    weakMap.set(obj, res);
    return res;
  }

  if (isSet(obj)) {
    let res = new Set();
    obj.forEach((val) => {
      res.add(cloneDeep(val, weakMap));
    });
    weakMap.set(obj, res);
    return res;
  }

  if (isMap(obj)) {
    let res = new Map();
    obj.forEach((val, key) => {
      res.set(key, cloneDeep(val, weakMap));
    });
    weakMap.set(obj, res);
    return res;
  }

  if (isRegExp(obj)) {
    const resFlags = /\w*$/;
    const res = new obj.constructor(obj.source, resFlags.exec(obj));
    res.lastIndex = obj.lastIndex;
    weakMap.set(obj, res);
    return res;
  }

  let res = {};
  weakMap.set(obj, res);
  // symbols属性名
  let symbols = Object.getOwnPropertySymbols(obj);
  if (symbols.length > 0) {
    for (let key of symbols) {
      let val = obj[key];
      res[key] = isObject(val) ? cloneDeep(val, weakMap) : val;
    }
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = obj[key];
      res[key] = isObject(val) ? cloneDeep(val, weakMap) : val;
    }
  }
  return res;
}

// test
var map = new Map();
map.set(1, 1);
map.set(2, 3);
var obj = {
  a: null,
  b: undefined,
  c: false,
  d: 123456,
  e: "abcdefg",
  f: Symbol(),
  g: {
    g1: 12,
    g2: "hello",
    g3: true,
  },
  h: function (a) {
    console.log(a);
  },
  i: [12, 34, 78],
  j: new Date(),
  k: new Set([5, 6, 7]),
  l: map,
  m: /\W$/g,
[Symbol()]: 'symbol'
};

// obj.x = obj.i;

var deepObj = cloneDeep(obj);
// console.log(deepObj.x == deepObj.i);
console.log(deepObj);
