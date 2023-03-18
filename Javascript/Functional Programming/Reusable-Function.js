//#1.Array Map
/*Looping*/
//Example
//['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

//#2.Array Filter
/*Penyaringan Data*/
//Example

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

// const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

// console.log(eligibleForScholarshipStudents);

//#3.Array Reduce
/*mengeksekusi fungsi reducer pada setiap elemen array mengembalikan output satu nilai saja */
//Example
//arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

//#4.Array Some
/*fungsi yang menghasilkan nilai boolean*/
//Example

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

//#4.Array Find
/*Pencarian nilai yang diinginkan*/
//Example
//arr.some(callback(element, [index], [array]), [thisArg])

// const students = [
//   {
//     name: 'Harry',
//     score: 60,
//   },
//   {
//     name: 'James',
//     score: 88,
//   },
//   {
//     name: 'Ron',
//     score: 90,
//   },
//   {
//     name: 'Bethy',
//     score: 75,
//   }
// ];

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

//#5.Array Sort
/*pengurutan nilai*/
//Example
//arr.sort([compareFunction])

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

//Another Example Sort
const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);


//#6.Array every
/*mengechheck semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan dengan nilai hasil adalah boolean*/
//Example
//arr.every(callback(element, [index], [array])

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

//#6.Array forEach
/*memanggil fungsi callback pada setiap iterasi index array.*/
//Example imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}

//Example Deklaratif
const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];

namess.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

//Note !: tidak bisa menggunakan operator break atau continue saat menggunakan forEach pada perulangan

// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// for(let i = 0; i < names.length; i++) {
//   if(names[i] === 'Jeff') continue; // Bisa!

//   console.log(`Hello, ${names[i]}!`);
// }

// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });