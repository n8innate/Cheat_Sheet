

// //MAKING AN ARRAY REVERSE FUNCTION WITH RECURSION
// let array = [1, 2, 3, 4];
// let array2 = [5, 4, 3, 2, 1];

// let reverseArr = (arr, holderArr = []) => {
//   //MAKE AND RETURN A NEW ARRAY
//   if (arr[0] === undefined) {
//     return holderArr;
//   }
//   //PUSH INTO THE NEW ARRAY THE LAST VARIABLE
//   let lastNum = arr.pop();
//   holderArr.push(lastNum);
//   //RETURN RECURSION
//   return reverseArr(arr, holderArr);
// };
// console.log(reverseArr(array));
// console.log(reverseArr(array2));

// // let lastNum = array.pop()
// // console.log(array, lastNum);



// //USING SORT
// let simpArray = [2, 14, -44, 35, 23]
// let newArray = [];

// let organizedArray = simpArray.sort((a, b) => a - b)
// console.log(organizedArray)




/* //MAP, FILTER, REDUCE
let nums = [45, 24, 66, 3, 77, 29]

// MAP
let multi = nums.map(nums => nums * 2);
console.log(multi)
// FILTER
let evenz = nums.filter(nums => nums%2===0)
let oddz = nums.filter(nums => nums%2!==0)
console.log(evenz, oddz)
// REDUCE
let reduct = nums.reduce((a,cV) => a+cV, 0)
console.log(reduct)
 */

/*//THE LONG WAY - INCOMPLETE
for (i in simpArray) {
    let newArray = [0];
    if (simpArray[i] > newArray[0]){
        newArray.splice(newArray.length, 0, simpArray[i]);
    };
else (simpArray[i] < newArray[0]){
        newArray.splice(0, 0, simpArray[i])};
}
console.log(newArray);
 */

/*
let brkts = []
brkts.push(2, 3, 4);
console.log(brkts)
brkts.splice(0, 0, 1)
console.log(brkts)
brkts.splice(5, 0, 5)
console.log(brkts)
 */





//USING ASSIGN AND REDUCE TO TRANSFER AN ARRAY INTO AN OBJECT
// const possibleIterable = [4, 3, 9, 6, 23];
// let divByThree = {};

//USING ASSIGN OPERATOR
// Object.assign(divByThree, possibleIterable);

//USING REDUCE OPERATOR
// divByThree = possibleIterable.reduce((a, b, c) => (a[b]=c, a),{});

// console.log('divByThree:', divByThree);
// console.log('possibleIterable:', possibleIterable);




 
/*//MAKING FOREACH AND MAP FROM SCRATCH
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    };
}
function map(number, magic){
    let newArr = [];
    number.forEach(num => newArr.push(magic(num)))
    return(newArr);
};
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
 */
