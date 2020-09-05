function Event(_events) {
    this._events = _events || new Map(); // map方式存储
    this._maxListeners = this._maxListeners || 10; // 设置监听上限
}

Event.prototype.emit = function(type, ...args) {
    const handler = this._events.get(type);
    if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
            if (args.length > 0) {
                handler[i].apply(this, args);
            } else {
                handler[i].call(this);
            }
        }
    } else {
        // 单函数
        if (args.length > 0) {
            handler.apply(this, args);
        } else {
            handler.call(this);
        }
    }
    return true;
}

Event.prototype.addEventListener = function(type, fn) {
    const handler = this._events.get(type);
    if (!handler) {
        this._events.set(type, fn);
    } else if (handler && typeof handler === 'function') {
        //  如果是监听者
        this._events.set(type, [handler, fn]);
    } else {
        handler.push(fn);
    }
}

Event.prototype.removeEventListener = function(type, fn) {
    const handler = this._events.get(type);
    if (handler && typeof handler === 'function') {
        // 如果只被监听过一次
        this._events.delete(type, fn)
    } else {
        // 被多次监听
        let position = handler.indexOf(fn);
        if (position > -1) {
            handler.splice(position, 1);
            if (handler.length === 1) {
                this._events.set(type, handler[0]);
            }
        }  else {
            return this;
        }
        
    }
}

const emitter = new Event();

emitter.addEventListener('click', data => {
    console.log(data);
});

emitter.addEventListener('click', data => {
    console.log(data+'2');
})


emitter.emit('click', 'hello')


emitter.removeEventListener('click', data => {
    console.log(data);
})

// emitter.removeEventListener('dbclick', data => {
//     console.log(data);
// })

console.log(emitter, emitter.__proto__, Event.prototype)