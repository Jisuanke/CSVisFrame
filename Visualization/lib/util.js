export function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

export function property(name) {
    return function(obj) {
        return obj ? obj[name] : undefined;
    };
}
