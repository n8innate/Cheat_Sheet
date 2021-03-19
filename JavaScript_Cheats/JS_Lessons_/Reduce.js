// Use reduce to combine all given arrays into a single array without repeating values
function union(arrays) {
    return arrays.reduce((acc, cur) => {
        return acc.concat(cur.filter(elem => !acc.includes(elem)))
    })
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]



//Using Reduce to count the number of times a name[item] appears
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames, name) => {
    if (name in allNames){
        allNames[name]++;
    } else allNames[name] = 1;
    return allNames;
}, {});
//Logs an object with all names[keys] with how many times they appear[values]
console.log('countedNames:', countedNames); 



//  Using Reduce to create a new object organized by a given 'property'/key
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property];   //Make a key for the returned object 'keys'
  
      if (!acc[key]) {           //Ask if this key exists in the returning object yet
        acc[key] = [];           //If not, make the Key with an empty array to fill with Person Objects
      }
  
      acc[key].push(obj)         //Push the obj[curVal] into its appropriate Key array
    //   console.log('acc:', acc)
    //   console.log('obj:', obj)
    //   console.log('key:', key, '\n')
      return acc;               //Once all items have been cycled through, the Object[acc] can be returned
    }, {})
  }
  const groupedPeople = groupBy(people, 'age');
  console.log('groupedPeople:', groupedPeople)
  // groupedPeople is:
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }