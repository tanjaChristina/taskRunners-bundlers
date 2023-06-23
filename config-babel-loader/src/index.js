/*
follwoing code will automatically be transpiled by babel to be executable in older browsers. 
Babel may not be necessary nowadays as browser upates are more frequent and the situation changed - new JS syntax is supported earlier because older browsers are deprecated.
Anyway, it's good to know about it and see it in action:
so pls choose any syntax which you think new, and it will be transpiled so it also can be understood by older browsers */

import someImportedFunction from './someFunction';

console.log(`I'm a really simple entry point.`);

const a = { duration: 50 };

//nullish coalescing assignment
a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

someImportedFunction();