import { sayHello } from '../src/index';

describe('sayHello', () => {
  it('should say hello to world by default', () => {
    expect(sayHello()).toBe('Hello, world!');
  });
  it('should say hello to a provided name', () => {
    expect(sayHello('Alice')).toBe('Hello, Alice!');
  });
});
