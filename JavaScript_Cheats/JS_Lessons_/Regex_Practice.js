/*//REGEX DEVICES

FUNCTIONS:  test(), match(), matchAll(), replace(), replaceAll(), search(), split(), exec()

ALWAYS USES:  "//"

FOR GREEDY:  //g
UPPER AND LOWER:  //i
DIGITS/NONDIGITS:  /d/ OR /D/
MULTILINE:  /m/
SPACES/NONSPACES:  /\s/ OR /\S/
ANY CHARACTER:  /./
ANY CHARACTER OR NUMERIC:  /\w/
*/

const someString = `A small drop of sugar makes the medicine go down.`;

const regFinder = /\w+[ ]/g;

const matchMaker = someString.match(regFinder);

console.log(matchMaker);
