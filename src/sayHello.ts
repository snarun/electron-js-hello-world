export function sayHello(name?: string): void {
  const message = `Hello${name ? ", " + name : ""}!`;
  console.log(message);
}
