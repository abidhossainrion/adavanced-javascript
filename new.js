class person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName =lastName;
        this.salary = salary;


    }
}

const heroPerson = new person("Hero","Balam",2000);
console.log(heroPerson);

const friendlyPerson = new person('Hero','Alom',25000);

console.log(friendlyPerson);

// function PersonOld(firstName,lastName,salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;

// }

// const oldPerson = new PersonOld('Grand','Papa',1200);
// console.log(oldPerson);