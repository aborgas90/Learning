/* Fungsi dari Set Time Out
Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.
*/

//example
console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)//3000 merupakan waktu dalam satuan milisecond
 
console.log('Ada yang bisa dibantu?');

//algorithm 
/* 
1.cetak selamat datang 
2.cetak ada yang bisa dibantu 
3.cetak terimakasih (alasan karena asynchronous dapat berjalan ketika proses yang lain sedang berjalan )
*/

/*
Fungsi lain yang berjalan secara asynchronous adalah fungsi fetch

fetch digunakan biasanya untuk request dan response object.fetch ini memungkinkan kita melakukan permintaan dari berbagai jenis source seperti HTML, JSON dll
*/

//examples
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  