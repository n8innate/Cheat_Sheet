// PRACTICE WITH MODULES, EXPORT AND IMPORT

// Input - feeding module
let mathStuff = (x) => {
    console.log(x * 2);
};

export default mathStuff;

// Output - receiving module
import mathStuff from './quickCode';

mathStuff(2);