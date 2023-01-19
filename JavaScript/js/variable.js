// 1. Use strice
// added in ES 5
// use this for Valina JavaScript.
'use strict';

// 2. Variable, rw(read, write)
// let (added in ES6)
// scope (block scope, global local)
{
    let name = 'jinho';
    console.log(name);
    name = 'hello';
    console.log(name);
}

// var (don't ever use this!)
// var hoisting (어디에 선언했는지 상관없이 제일 위로 선언을 올려주는 것)
// has no block scope

// 3. Constant, r(read only)

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types:
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// bigInt (fairly new, don't use it yet)

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const Jinho = { name: 'jinho', age: 20 };
Jinho.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello'; // string
console.log(text.charAt(0));

console.log(`value ${text}, type: ${typeof text}`);
text = 1;   // number
console.log(`value ${text}, type: ${typeof text}`);
text = '7' + 5; // string
console.log(`value ${text}, type: ${typeof text}`);
text = '8' / '2';   // number
console.log(`value ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // type error

// TypeScript가 나오게 된 배경