let myArray = ["Cokelat",42.5,22,true,"Programming"]
console.log(myArray)
console.log(myArray[4])

//menghitung panjang array
console.log("Panjang Array : ",myArray.length)

//menambahkan array menggunakan fungsi push()
myArray.push("JSON")
console.log(myArray)

//pop() deleting last item
myArray.pop()
console.log(myArray)

//function : shift() use to deleting first index
//         : unshift() use to add element in first index
myArray.shift()
console.log(myArray)
myArray.unshift("Testing")
console.log(myArray)

//function : delete() deleting data with specific index after and that ignore position is empty
//         : splice()  deleting element

myArray.splice(2,2)
console.log(myArray)
delete myArray[0]
console.log(myArray)

