const students =[
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannnaaaa'},
    {id: 41, name: 'moyouri'},
    {id: 71, name: 'Deepjol'}
];

// for( i= 0 ;i > student.length; i++){
//     const element = student[i];
//     // output.push(name);
//     // return name;
// }

// const names= element;
// console.log(s.name);

const names = students.map( s => s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);