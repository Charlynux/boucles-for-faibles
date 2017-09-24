export function sum(a, b) {
    return a + b;
}

export function double(value) {
    return value * 2;
}

export function isOdd(value) {
    return value % 2 === 0;
}

export function average(notes) {
    return (notes.reduce(sum) / notes.length).toFixed(2);
}