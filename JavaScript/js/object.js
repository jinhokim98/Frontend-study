// Objects
// one of the JavaScript data types
// a collection of related data and/or funcitonality
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const name = 'jinho';
const age = 4;
print(name ,age);

const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name_);
    console.log(person.age);
}

const jinho = {name_: 'jinho', age: 4};
print(jinho);

jinho.hasJob = true;
console.log(jinho.hasJob);

delete jinho.hasJob;
console.log(jinho.hasJob);

// 2. Computed properties
// key should be always string
console.log(jinho.name_);
console.log(jinho['name_']);
jinho['hasJob'] = true;
console.log(jinho.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jinho, 'name_');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('jinho', 26);
console.log(person4);


// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


// 5. in operator: property existence check (key in obj)
console.log('name_' in jinho);
console.log('age' in jinho);
console.log('random' in jinho);


console.clear();
// 6. for..in vs for..of
// for (key in obj)
for (key in jinho) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for(value of array) {
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jinho', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// use Object.assign
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
