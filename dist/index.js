"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = sayHello;
function sayHello(name = "world") {
    return `Hello, ${name}!`;
}
if (require.main === module) {
    const [, , arg] = process.argv;
    const name = arg || undefined;
    // eslint-disable-next-line no-console
    console.log(sayHello(name));
}
