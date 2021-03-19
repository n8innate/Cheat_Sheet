// //FIRST CLASS CONSTRUCTED
// let person = {
//     name: "Nate",
//     age: 27,
//     hairColor: "Brown",
//     tellMeAboutYourself() {
//         return (`My name is ${this.name} and I'm ${this.age}.`);
//     }
// }
// person.height = "6ft exactly"
// const keys = Object.keys(person)
// const values = Object.values(person)
// console.log(person.constructor)
// console.log(person.tellMeAboutYourself())
// console.log(person.hairColor)
// console.log(Object.values(person))
// for (let key in person){
//     if (typeof person[key] !== 'function'){
//         console.log(person[key])
//     }
// }



// //CONSTRUCTOR FUNCTION - (The main advantage to using
// //Classes is being able to select
// //specific properties and methods)
// function CreateFriend(friend){
//     this.intro = function(){
//         console.log(`${friend} is my friend.`);
//     };
//     this.greeting = function(){
//         console.log(`${friend} says, what's up?!`)
//     };
// };
// let Nick = new CreateFriend("Nick")
// console.log(Nick.greeting())
// console.log(Nick.intro())
// CreateFriend.parting = { parting: "See ya later"};



// //MAKING PET NAMES
// function Pet (type, name, favFood) {
//     let pet = {}
//     pet.type = type
//     pet.name = name
//     pet.favFood = favFood
//     pet.whatTheyEat = function(){
//         console.log(`My pet's name is ` + this.name + `, he is a ` + this.type
//             + ` and he loves to eat ` + this.favFood);
//         };
//     return pet;
// }
// let Sanic = new Pet("Hedgehog", "Sanic", "apples")
// let Tailz = new Pet("Fox", "Tails", "the souls of his enemies")
// console.log(Sanic.whatTheyEat())
// console.log(Tailz.whatTheyEat())



// // //// PLAYING WITH OBJECTS
// // let obj1 = { value: 5 };
// // let obj2 = { value: 7 };
// // let obj3 = 10;

// // function increaseByOne(num) {
// //     num.value++;
// // }

// // increaseByOne(obj2);
// // console.log(obj2);



// ////CODE DEVON HELPED ME WITH
// function createStyledElement(elementName) {
//     let element = document.createElement(elementName);
//     element.style.padding = '10px';
//     return element; }
// createStyledElement('div')
// createStyledElement('p')



// //PROTOTYPES
// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// }
// User.prototype.login = function(){
//     this.online = true;
//     console.log(this.email, ` has logged in`);
// }
// User.prototype.logout = function(){
//     this.online = false;
//     console.log(this.email, ` has logged out`);
// }



// //***TRYING TO RETURN EMAILS WHICH ARE GOOGLE USERS***
// let googleUser = function(){
//     const gUser = 'gmail'
//     this.email.search(gUser)
// };

// let userOne = new User(`ncarmstrong@ymail.com`, `Nate`);
// let userTwo = new User(`aleksandraplotkina@gmail.com`, `Alex`);
// //TESTING, TESTING

// //console.log((userOne))
// //userTwo.login()
// //console.log(userTwo)



// // ADD AN ANIMAL PARENT-OBJECT THAT WILL GIVE DOG THE METHOD TO EAT
// function Animal() {
//     this.eat = function() { console.log("nomnomnom") }
// }
// // Animal.prototype.eat = function() { console.log("nom nom nom") }

// // DOG CONSTRUCTOR FUNCTION
// function Dog(name, color) {
//     this.prototype = new Animal();
//     this.name = name;
//     this.color = color;
// }
// // Added below to allow Dog to eat
// // Dog.prototype = Object.create(Animal.prototype);

// // NEW INSTANCE OF DOG
// const fido = new Dog("Fido", "Black");
// // console.log(fido.name);

// // TEST DOG EATING
// // fido.eat();

// // ADDING LEGS TO THE DOG CONSTRUCTOR FUNCTION
// Dog.prototype.legs = 4;

// // USE "CONSTRUCTOR" TO FIND "DOG" FROM FIDO
// // console.log(fido.constructor);

// fido.prototype.eat();
// console.log(fido.legs);





