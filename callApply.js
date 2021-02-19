const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullname: function(){
        console.log(this.firstName ,this.lastName);
    },
    chargeBill: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }

}
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const heroPerson = {
    
    firstName:'Hero',
    lastName: 'Uddin',
    salary: 25000,
}

const friendlyPerson = {
    firstName:'Hero',
    lastName: 'Balam',
    salary: 25000,
}

// normalPerson.chargeBill();

// const heriBillcharge =  normalPerson.chargeBill.bind(heroPerson);
// heriBillcharge(2000);
// heriBillcharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// normalPerson.chargeBill.call(heroPerson,900,100,10);
// normalPerson.chargeBill.call(heroPerson,3000,300,30);
// console.log(heroPerson.salary);


// normalPerson.chargeBill.call(heroPerson,900,100,10);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);



normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
normalPerson.chargeBill.apply(heroPerson,[4000,400,40]);
console.log(heroPerson.salary);
