// import _ from 'loadash'//'_' standard name from loadash
const _ = require('./node_modules/package.json');

const myArray = [1,2,3,4]
// let sum  = 0;
// for(let i = 0; i < myArray.length; i++){
//     sum += myArray[i];
// }
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});//algorithm =>"prev,current" ="0+1" "1+2" "3+3"

console.log(sum);

module.exports = {sum}



