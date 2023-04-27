# Coding-Quiz-Challenge


Questions and Solutions From:
https://www.interviewbit.com/javascript-mcq/

Sorting Function Based on ChatGPT Sorting Code:
```javascript
const names = ['John', 'Alice', 'Bob', 'Mary'];
const ages = [25, 20, 30, 28];

const people = names.map((name, index) => ({ name, age: ages[index] }));
people.sort((a, b) => a.age - b.age);

const sortedNames = people.map(person => person.name);
const sortedAges = people.map(person => person.age);

console.log(sortedNames); // ['Alice', 'John', 'Mary', 'Bob']
console.log(sortedAges); // [20, 25, 28, 30]
```