const myMap = new Map([['1', 'a String key'],[1, 'a number key'],[true, true]]);

console.log(myMap);

//mendapatkan nilai berdasarkan key dengan metode get()
//menambahkan pasangan key value menggunakan metode set()
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));