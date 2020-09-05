class EventBus {
    constructor() {
        this.events = this.events || new Map();
    }

    addEventListener(type, fn) {
        if (!this.events.get(type)) {
            this.events.set(type, fn)
        }
    }

    emit(type) {
        var handler = this.events.get(type)
        handler.apply(this, [...arguments].slice(1))
    }
}

var bus = new EventBus()
bus.addEventListener('hello', function(arg) {
    console.log(arg)
})

bus.emit('hello', 123)
bus.emit('hello', 789)

console.log(bus, bus.__proto__, EventBus.prototype)