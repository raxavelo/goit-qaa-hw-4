function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(numbers);
console.log(doubledNumbers);


function getStudentNames(students) {
    return students.map(student => student.name);
}

const students = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 21 },
    { name: "Eve", age: 22 }
];


const studentNames = getStudentNames(students);
console.log(students);
console.log(studentNames);