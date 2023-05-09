//change callback to promise with promisify

//for example
// const { promisify } = require('util');
 
// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
//      if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }
// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);


// getUsersPromise(false)
//   .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
//   .catch(err => console.log(err.message));
 
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message)); // cannot retrieve users due offline


//for example

const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('Asynchronous Proses/Change Callback to Promise with using Promisify/data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));


/*
 Namun, terdapat beberapa catatan ketika Anda hendak mengubah 
 fungsi asynchronous callback-based menjadi Promise-based menggunakan 
 util.promisify().

1.Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. 
Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
2.Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). 
Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.

*/