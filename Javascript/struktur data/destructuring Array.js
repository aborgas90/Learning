const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
//const [, , thirdFood ] = favorites; => akan mengoutputkan data  = Nugget

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

//Destructuring Assignment
console.log("=============================\n \tDestructuring Assignment")
console.log("=============================\n")
let myFood = "Ice Cream";
let herFood = "Noodles";
[myFood,herFood] = favorites
console.log(myFood)
console.log(herFood)

//Penukaran Values yg tidak Effective
var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

//temp = a;
//a = b;
//b = temp; 

//console.log("Setelah swap");
//console.log("Nilai a: " + a);
//console.log("Nilai b: " + b);

console.log("Setelah swap yang Effective");
[a,b] = [b,a]
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

console.log("=============================\n \tDefault Values")
console.log("=============================\n")
const favorites2 = ["Seafood"];
//const [myFood2, herFood2] = favorites2
 

//karena index setelah Seafood Koson jadi undifined
//untuk pemberian nilai undifined
const [myFood2, herFood2 = "jagung"] = favorites2
console.log(myFood2);
console.log(herFood2);