const favorites = ["Seafood","Salad","Nugget","Soup"]
const others = ["Cake","Pie","Donut"]
console.log(favorites)

//function : spread (...) digunakan untuk menybarkan data array
//fungsi spread : menggabungkan antar array 
console.log(...favorites)

//sebelum menggunkan spread
const allFavorites = [favorites,others]
console.log(allFavorites)
//after using spread with compounding(penggabungan) array
const allFavorites_2 = [...favorites,...others]
console.log(allFavorites_2)

//ex
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);


