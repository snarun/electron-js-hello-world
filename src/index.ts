// CLI entry point
import { sayHello } from './sayHello';

function main() {
  // Accept name as an optional argument
  const name = process.argv[2];
  sayHello(name);
}

if (require.main === module) {
  main();
}
