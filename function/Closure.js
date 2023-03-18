/*Closure*/
/*Merupakan ppemanggilan fungsi didalam fungsi*/
// function init(){
//     const name = 'Wildan'
//     function greet(){
//         console.log(`Hello,${name}`)
//     }
//     greet()
// }
// init() /* Untuk menampilkan output*/

function init() {
    const name = 'Obi Wan';
    function greet() {
      console.log(`Halo, ${name}`);
    }
    return greet;
  }

  const myFunction = init();
  myFunction();

  /* output
  Halo, Obi Wan
   */

let counter = 0
const add = () =>{
    return ++counter
}

console.log(add())
console.log(add())
counter = 24
console.log(add())

//Closure functions
const add_1 = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }

  const addCounter = add_1();

  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());