
////REGULAR FUNCTION
function message(){
    return `Hello World!`;
}
//console.log('message():', message())

////ARROW FUNCTION
let messageTwo = () => `Hello World!`;
//console.log(messageTwo())

////ARROW FUNCTION WITH VARIABLE
let messageThree = a => `Hello ${a}`;
//console.log(messageThree('Nate'))

////ARROW FUCNTION ON OBJECTS
const people = [
    {
        fName: 'Nate',
        lName: 'Armstrong'
    },
    {
        fName: 'Alex',
        lName: 'Plotkina'
    }
];
console.log( people.map( person => person.lName ) );
