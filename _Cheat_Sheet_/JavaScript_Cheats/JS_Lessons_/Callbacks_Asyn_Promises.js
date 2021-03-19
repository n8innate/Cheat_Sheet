
////SIMPLE MAP/ ARROW FUNCTION
// let names = ['John', 'Mary', 'Bob'];
// const greet = names.map( name => `Hello ${name}` );
// console.log(greet)


////CALLBACK FUNCTION FUN
// let greeting = name => console.log( `Hello ${name}!` );
// const userInfo = (firstName, lastName, callback) => {
//     const fullName = `${firstName} ${lastName}`
//     callback( fullName );
// userInfo('Nate', 'Armstrong', greeting)


////PLAYING AT ASYNC PROGRAMMING
// const hasMeeting = false
// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting){
//         const meetingDetails = {
//             name: 'Marketing Meeting',
//             location: 'Skype',
//             time: '1:00 PM'
//         }
//         resolve(meetingDetails);
//     } else {
//         reject(new Error('Meeting already scheduled'))
//     }
// })


////PROMISES, SWEET PROMISES
// const promise1 = Promise.resolve('Promise 1 complete');
// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Promise 2 complete');
//     }, 2000);
// });
////THESE WILL RESOLVE THE PROMISES ABOVE
// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));
////THIS WAITS FOR ALL PROMISES TO COMPLETE BEFORE FINISHING
// Promise.all([promise1, promise2]).then(res => console.log(res));
////THIS ONLY LOGS THE PROMISE WHICH FINISHES FIRST
// Promise.race([promise1, promise2]).then(res => console.log(res));








