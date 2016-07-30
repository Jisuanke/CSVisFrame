import * as _ from 'lodash';
import d from 'd';
const ArrProto = Array.prototype;

// An ObservableArray will show up as an array of [undefined x length] in Chrome
// console. This is the expected behavior, because Chrome thinks objects with a
// numeric `length` property and a `splice` function is an array.
// To remove this "bug", delete 'splice' in this page.

export default class ObservableArray {
    constructor() {
        this.items = Array.apply(null, arguments);
        this.listeners = {};
    }

    on(name, callback) {
        const listeners = this.listeners;
        (listeners[name] || (listeners[name] = [])).push(callback);
        return this;
    }

    off(callback) {
        for (let group of _.values(this.listeners)) {
            const index = group.indexOf(callback);
            if (index > -1) {
                group.splice(index, 1);
            }
        }
        return this;
    }

    emit(name, args = []) {
        const list = this.listeners[name];
        if (list && list.length) {
            for (let callback of list) {
                callback.apply(this, args);
            }
        }
        return this;
    }

    get(num) {
        return this.items[num];
    }

    set(num, val) {
        this.items[num] = val;
        return val;
    }

    clear() {
        return this.items = [];
    }

    toJSON() {
        return this.items;
    }

    toArray() {
        return this.items;
    }

    replaceWith(array) {
        this.items = array;
        return this.emit('replaceWith', arguments);
    }

    // if __DEV__
    //  for i in [0..50]
    //      do (i) => defineProperty @prototype, name, value: -> @items[i]

    get first() {
        return this.items[first];
    }

    get last() {
        return this.items[this.items.length - 1];
    }

    get length() {
        return this.items.length;
    }
}

var methods = Object
    .getOwnPropertyNames(ArrProto)
    .filter(name => typeof ArrProto[name] === 'function');

var mutatingMethods = 'copyWithin fill pop push reverse shift sort splice unshift'.split(' ');

if (typeof Symbol === 'function' && Symbol.iterator) {
    methods.push(Symbol.iterator);
}

for (let name of methods) {
    let value;
    if (ObservableArray.prototype.hasOwnProperty(name)) {
        continue;
    } else if (mutatingMethods.includes(name)) {
        value = function () {
            var ref = this.items[name].apply(this.items, arguments);
            this.emit(name, arguments);
            this.emit('change', [this]);
            return ref;
        };
    } else {
        value = function () {
            return this.items[name].apply(this.items, arguments);
        };
    }
    Object.defineProperty(ObservableArray.prototype, name, d(value));
}
