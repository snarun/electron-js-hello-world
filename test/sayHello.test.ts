import { sayHello } from '../src/sayHello';

describe('sayHello', () => {
  const originalConsoleLog = console.log;

  beforeEach(() => {
    (console.log as any) = jest.fn();
  });

  afterEach(() => {
    (console.log as any) = originalConsoleLog;
  });

  it('should greet the world when no name is given', () => {
    sayHello();
    expect(console.log).toHaveBeenCalledWith('Hello!');
  });

  it('should greet with a provided name', () => {
    sayHello('Alice');
    expect(console.log).toHaveBeenCalledWith('Hello, Alice!');
  });
});
