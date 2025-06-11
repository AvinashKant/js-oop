class EventEmitter {
    constructor() {
        this.events = {}; // Stores event listeners keyed by event name
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const subscription = { callback };

        this.events[eventName].push(subscription);

        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(subscription);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName].map(sub => sub.callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */