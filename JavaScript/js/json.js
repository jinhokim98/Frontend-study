'use strict';
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => console.log(`${name} can jump!`),
};

json = JSON.stringify(rabbit);
console.log(json);

// property
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jinho' : value;
});
console.log(json);


// 2. JSON to Object
// Object function is not included
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// error -> type (Date -> string)
// callback function -> error correction


// Useful website
// JSON Diff -> the semantic JSON compare tool
// JSON Beautifier -> format
// JSON Parser 
// JSON Vaidator