console.log("=============================\n \tDestructuring Object")
console.log("=============================\n")
//Destructuring Object
const profile = 
{
    firstname : "Agus",
    lastname : "Saputra",
    age : 20    
}

const nama_depan = profile.firstname
const nama_akhir = profile.lastname
const umur = profile.age

//const {firstname, lastname, age} = profile;

console.log(nama_depan,nama_akhir,umur)
//console.log(firstname,lastname,age)

console.log("=============================\n \tDestructuring Assignment")
console.log("=============================\n")
//Destructuring Assignment
const profile_1 = 
{
    firstname : "John",
    lastname : "Doe",
    Age : 21
}

let firstname = "Dimas";
let Age = 22;

// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment
// Jika ada kurung JS dapat mengetahui bukan block statement 
({firstname, Age} = profile_1);
console.log(firstname);
console.log(Age);

console.log("=============================\n \tDefault Values")
console.log("=============================\n")
//Default Values
const profile_2 = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale} = profile_2;
//const {firstName, age, isMale = false } = profile_2; => Alternatif jika tidak ingin Undifened
 
console.log(firstName)
console.log(age)
console.log(isMale)

console.log("=============================\n \tAssingment to Different Local Variable Names")
console.log("=============================\n")

const profile_4 = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName: localFirstName , lastName: localLastName, age: localAge} = profile_4;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);