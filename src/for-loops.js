import { sum, double, isOdd } from "./utils";

const numbers = [1, 2, 3, 4, 5];

let doubles = [];
for (var i = 0, len = numbers.length; i < len; i ++) {
    doubles.push(double(numbers[i]));
}

let odds = [];
for (var i = 0, len = numbers.length; i < len; i ++) {
    if (isOdd(numbers[i])) {
        odds.push(numbers[i]);
    }
}

let sumResult = 0;
for (var i = 0, len = numbers.length; i < len; i ++) {
    sumResult = sum(sumResult, numbers[i]);
}