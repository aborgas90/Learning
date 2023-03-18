for (let i = 0; i<5; i++) //Penggunaan for dengan statement i
{
    console.log(i)
}
console.log("=============")
let array = ["Luke","Han","Chewbacca","Leia"]
let i = 0
//looping with of
for(const arrayItem of array)
{
    i++
    console.log(i," :",arrayItem)
}
console.log("=============")
//looping while
let j = 1
while ( j <= 100) 
{
    console.log(j)
    j++
}
console.log("=============")
//do while
let k = 1
do{
    console.log(k)
    k++
}while(k <= 11)

