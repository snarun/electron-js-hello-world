"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('sayHello', () => {
    it('should say hello to world by default', () => {
        expect((0, index_1.sayHello)()).toBe('Hello, world!');
    });
    it('should say hello to a provided name', () => {
        expect((0, index_1.sayHello)('Alice')).toBe('Hello, Alice!');
    });
});
