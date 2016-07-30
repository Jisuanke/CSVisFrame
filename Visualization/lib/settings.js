// Settings for CSVisFrame are stored here.
// Users can supply custom settings through CSVisFrame.config() function.

export let namespace = 'va';
export let speed = 1200;
export let containers = {};
export let codemirror = {};

export function config(obj) {
    if (obj.namespace) {
        namespace = obj.namespace;
    }
    if (obj.containers) {
        Object.assign(containers, obj.containers);
    }
    if (obj.codemirror) {
        codemirror = obj.codemirror;
    }
    if (obj.speed) {
        speed = obj.speed;
    }
}
