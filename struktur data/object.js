console.log("============================")
const user = {firstName : "Luke",lastName : "Skywalker",age : 19, isJedi : true,"Home World" : "Purwokerto"};

console.log(`Halo,nama saya ${user.firstName} ${user.lastName}`);//menggunakan petik (`) untuk memanggil key dengan ($)
console.log(`umur saya ${user.age} tahun`);

console.log("============================")
console.log(`Saya berasal dari ${user["Home World"]}`)

console.log("============================")
console.log("Pengubahan Nilai Property pada Object")

const spaceship = {name : "Bambang Susanto", manufacturer : "Kuli Bangunan",maxspeed : 1200, color : "Light gray"}
spaceship.color = "Ocean Blue"
spaceship["maxspeed"] = 9999

console.log(spaceship)
