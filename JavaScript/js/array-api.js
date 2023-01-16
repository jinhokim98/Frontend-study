// 01. make a string out of an array
// join
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// 02. make an array out of a string
// split
{
    const fruits = '🍎, 🍒, 🍈, 🍉';
    const result = fruits.split(',');
    console.log(result);
}

// 03. make this array look like this: [5, 4, 3, 2, 1]\
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// 04. make new array without the first two elements
// splice: mutable
// slice: immutable
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 39, true, 88),
];

// 05. find a student with the score 90
// find
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 06. make an array of enrolled students
// filter
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// 07. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map
{
    const result = students.map((student) => student.score);
    console.log(result)
}

// 08. check if there is a student with the score lower than 50
// some
{
    console.clear();
    const result = students.some((student) => student.score <= 50);
    console.log(result);
}

// 09. compute students' average score
// reduce
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
}