"use strict";
function large_shirt(size = "Large", text = "I Love Typescript") {
    console.log(`Size is "${size}" and the text is "${text}".`);
}
large_shirt();
function medium_shirt(size = "Medium", text = "I Love Typescript") {
    console.log(`Size is "${size}" and the text is "${text}".`);
}
medium_shirt();
function any_shirt(size, text) {
    console.log(`Size is "${size}" and the text is "${text}".`);
}
any_shirt("small", "The Boys");
