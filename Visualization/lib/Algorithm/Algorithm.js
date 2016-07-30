import * as _ from 'lodash'
import { codetrace } from '../views/guide'
import { Collection } from 'components'
import ObservableArray from '../submodules/ObservableArray'

export function Algorithm() {
    let $ = this;
    $.charList = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    $.states = new ObservableArray();
    $.initState = new State();
}

Algorithm.prototype = {

    constructor: Algorithm,

    reset() {
        this.step = 0;
        return this;
    },

    addState(state) {
        this.states.push(state);
        return state;
    },

    clearState(removeAll) {
        let $ = this;
        if ($.hasState && !removeAll) {
            $.states.replaceWith([$.states.last]);
        } else {
            $.states.clear();
        }
        return $;
    },

    get randomChar() {
        const char = _.sample(this.charList);
        _.pull(this.charList, char);
        return char;
    },

    get hasState() {
        return this.states.length > 0;
    },

    get lastState() {
        if (this.hasState) {
            return this.states.last;
        } else if (__DEV__) {
            throw ReferenceError('No lastState available.');
        }
    }
};

export class State {
    constructor() {
        let $ = this;
        $.edges    = new Collection('edges');
        $.vertices = new Collection('vertices');
        $.rects    = new Collection('rects');
        $.rectex   = new Collection('rectex');
        $.multibox = new Collection('multibox');
        $.texts    = new Collection('texts');
        $.lines    = new Collection('lines');
        $.cards    = new Collection('cards');
    }

    clone() {
        const state = new this.constructor();
        for (let key of Object.keys(this)) {
            var val = this[key];
            if (val && val.clone) {
                state[key] = val.clone();
            }
        }
        return state;
    }

    codetrace(...args) {
        if (args.length === 2) {
            args.unshift(this.codes.codes);
        }
        this.codes = codetrace.apply(this, args);
        return this;
    }

    draw(duration) {
        for (let item of this.nodes()) {
            if (item && item.draw) {
                item.draw(duration);
            }
        }
    }

    nodes() {
        let $ = this;
        return [
            $.edges, $.lines, $.vertices, $.rects,
            $.rectex, $.multibox, $.texts, $.codes, $.cards
        ];
    }
}
