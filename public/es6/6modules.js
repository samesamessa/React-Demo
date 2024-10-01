
//   Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.
// Named exports must be destructured using curly braces. Default exports do not.

// Import named exports from the file person.js:

import { name, age } from "./person.js";

// Import a default export from the file message.js:
console.log(name)
console.log(age)

// default keyword로 export
import message from "./person.js";
console.log(message())