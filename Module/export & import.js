// const user = {} kurung kurawal untuk menetapkan objek pada sebuah variabel //
// let object = {key1: "value1", key2: "value2", key3: "value3"} //
//objek yang menyimpan key & value yang diibaratkan key merupakan variabel yang menyimpan value//

//examples

//Object  contains key and values
// const user = {
//     firstName : "Luke",
//     lastName : "Skywalker",
//     age : 19,
//     isJedi : true,
//     "Home" : "Banjaran"
// };

const user = require('./state.js')
const spaceship = require('./state.js')

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age}`)
//beside for calling values in object with  '{}' we can calling them with bracket like that '[]'//
//for example//
console.log(`Rumah saya di ${user["Home"]}`)

//we can modification a object with  using assignment operator (=)
//for example
// const spaceship = {
//     name : "Bambang",
//     manuFacturer : "Purwokerto Engineering",
//     maxSpeed : 1200,
//     color : "Grey"
// };
//note 
//When creating an object, we are not bound by the properties in it so we can still modify it. It's different if we reinitialize the variables from the object.
spaceship.color = "Pink";
spaceship["maxSpeed"] = 3000;
console.log(spaceship)
//note 
//if the property doesn't exist .there the property will be created in the object //
//for example
spaceship.class = "Light freighter";
console.log(spaceship);