const ACCEPTED_CHARACTERS = [27, 13];

Rx.Observable.fromEvent(document.querySelector("input"), "keydown")
    .map(e => e.keyCode)
    .filter(keycode => ACCEPTED_CHARACTERS.includes(keycode))