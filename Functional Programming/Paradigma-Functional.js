/*Functional Programming adalah pemprograman dimana proses komputasi berdasarkan fungsi matematika murni*/
//Example Style Imperatif (Memerintah)

const names = ['Wildan','Agus','Mamad','Bambang']

const newNames = []

for (let i = 0; i<names.length; i++){
    newNames.push(`${names[i]}!`)
}

console.log(newNames)

//Example Style Deklaratif
const nama = ['Panjdi','Evan','Daffa']

const newNama = nama.map((nama) => `${nama}!`);//Map untuk looping
console.log(newNama)
