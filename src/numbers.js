import render from "./render/numbers";
import { sum, double, isOdd } from "./utils";

const numbers = [1, 2, 3, 4, 5];
const result = numbers
                    // .filter(isOdd)
                    .map(x => isOdd(x)
                            ? double(x)
                        : x);

render("Initial", numbers);
render("Résultat", result);
