import { h, init } from 'snabbdom';
import isArray from "is-array";

const patch = init([]);

const container = document.getElementById("numbers");

function renderNumber(number) {
    return h('div.number', {}, number);
}

function renderNumbers(numbers) {
    return numbers.map(renderNumber);
}

const displayData = data => isArray(data) ? renderNumbers(data) : renderNumber(data);

function view(title, data) {
    return h('div', {}, [h('h2', {}, title), h('div.numbers', {}, displayData(data))]);
}

export default function render(title, data) {
    const newElement = document.createElement("div");
    container.appendChild(newElement);

    patch(newElement, view(title, data));
}