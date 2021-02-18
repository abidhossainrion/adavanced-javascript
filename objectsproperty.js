const students = [
    {id: 21,name:'Omor Sunnt'},
    {id:21,name:'Mannaaaa'},
    {id:41,name:'Moyuri'},
    {id:71,name:'Deepjol'}
];


// const name  = [];
// for(let i = 0; i< students.length; i++){
    
//     const element = students[i];
//     name.push(element.name);

// }

const names  = students.map(s => s.name);
const ids = students.map(s=>s.id);

const bigger = students.filter(s=>s.id>40);
const biggerOne = students.find(s=>s.id>40);


console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);