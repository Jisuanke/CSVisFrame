(function polyfill(target, name, value) {
    if (target[name] == null) {
        Object.defineProperty(target, name, { value: value });
    }
    return polyfill;

})(Element.prototype, 'remove', function() {
    // 1. If the context object does not have a parent, terminate these steps.
    if (this.parentNode) {
        // 2. Remove the context object from the context object's parent.
        this.parentNode.removeChild(this);
    }

})(Element.prototype, 'query', Element.prototype.querySelector)
  (SVGElement.prototype, 'contains', HTMLElement.prototype.contains);
