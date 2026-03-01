export function sayHello(name: string = "world"): string {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  const [, , arg] = process.argv;
  const name = arg || undefined;
  // eslint-disable-next-line no-console
  console.log(sayHello(name));
}
