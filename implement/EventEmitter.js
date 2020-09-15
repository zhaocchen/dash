// 实现一个eventEmitter，拥有四个方法on, off, once 和 trigger

function EventEmitter(_events) {
    this._events = _events || new Map();
    this._maxListeners = this._maxListeners || 10;
}

/**
 * on 添加事件
 * @param {*} type 
 * @param {*} fn 
 */
EventEmitter.prototype.on = function(type, fn, once = false) {
    let handler = this._events.get(type)
    fn.once = once
    if (!handler) {
        this._events.set(type, fn)
    } else if (handler && typeof handler === 'function') {
        this._events.set(type, [handler, fn])
    } else {
        handler.push(fn)
    }
}

/**
 * off 移除事件
 * @param {*} type 
 * @param {*} fn 
 */
EventEmitter.prototype.off = function(type, fn) {
    let handlers = this._events.get(type)
    if (handlers && typeof handlers === 'function') {
        this._events.delete(type)
    } else {
        let index = handlers.indexOf(fn)
        console.log()
        if (index > -1) {
            handlers.splice(index, 1)
            if (handlers.length == 1) {
                this._events.set(type, handlers[0])
            }
        }
    }
}

/**
 * trigger 执行事件
 * @param {*} type 
 * @param  {...any} reset 
 */
EventEmitter.prototype.trigger = function(type, ...reset) {
    let handler = this._events.get(type);
    if (!Array.isArray(handler) ) {
        handler = [handler]
    }
    for (let i = 0; i < handler.length; i++) {
        let fn = handler[i];
        if (reset.length > 0) {
            fn.apply(this, reset);
        } else {
            fn.call(this)
        }
        if (fn.once) {
            this.off(type, fn)
        }
    }
        
}

/**
 * once 添加只执行一次的事件
 * @param {*} type 
 * @param {*} fn 
 */
EventEmitter.prototype.once = function(type, fn) {
    this.on(type, fn, true);
}


// test
const emitter = new EventEmitter();

function f2 (data) {
    console.log(data + '2');
}

emitter.on('click', data => {
    console.log(data);
});

emitter.on('click', f2)

emitter.off('click', f2)

emitter.once('click', data => {
    console.log('only once');
});

// console.log(emitter)

emitter.trigger('click', 'hello')
emitter.trigger('click', 'hello')

