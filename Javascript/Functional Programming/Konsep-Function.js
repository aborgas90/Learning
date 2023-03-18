//#1.Pure Function adalah fungsi yang tidak bergantung terhadapat nilai yang diluar parameter

//Example Impure Function
let pi = 3.14
const LuasLingkaran = (jari2) =>{
    return pi * (jari2*jari2)
}
//Note!: nilai akan berubah apabila diberikan parameter yang berbeda
console.log(LuasLingkaran(10))

//Example Pure Function
const LuasCircel = (jariJari) => {
    return 3.14 * (jariJari*jariJari)
}

//Note!: Pure Function tidak boleh menimbulkan Side Effect

//Example Side Effect
// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
//   };
  
// const person = {
//     name: 'Bobo'
// };
  
// const newPerson = createPersonWithAge(18, person);
//   console.log({
//     person,
//     newPerson
// });

//Solve Pure Function
const createPersonWithAge = (age, person) => {
    return {...person,age}
};

const person = {
    name: 'Bobo'
};
  
const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

//#2.immutability adalah objek yang tidak boleh diubah setelah objek tersebut dibuat
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

//#3.Rekursif adalah teknik yg memanggil diri sendiri
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};

countDown(10);

//#3.High Order Function fungsi yang dapat menerima fungsi lain pada argumen atau mengembalikan sebuah fungsi bahkan keduanya
//Example

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});
