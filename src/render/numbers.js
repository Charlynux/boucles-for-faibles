import { h, init } from 'snabbdom';
import isArray from "is-array";

const patch = init([]);

const container = document.getElementById("numbers-container");

function renderNumber(number) {
    return h('div', {}, number);
}

function renderNumbers(numbers) {
    return numbers.map(renderNumber);
}

function view(data) {
    return h('div', {}, isArray(data) ? renderNumbers(data) : renderNumber(data));
}

export default function render(data) {
    patch(container, view(data));
}