//Ada cara untuk menangani Asychronus yaitu dengan menggunakan Callback
/*Callback merupakan fungsi yang disisipkan pada argumen fungsi 
asynchronous dan akan dipanggil ketika proses dinyatakan selesai
*/
//!
//Struktur Callback
function callback(error, data) {
    // logika ketika proses asynchronous selesai
  }

//!

//example
// function getUsers(Callback){
//     //simulate network delay
//     setTimeout(()=>{
//         const users = ['John','Jack','Abigail']

//         Callback(users)
//     },3000)
// }

// function usersCallback(users) {
//   console.log(users);
// }
 
// getUsers(usersCallback);
function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }
   
  function usersCallback(error, users) {
    if (error) {
      console.log('process failed:', error.message);
      return;
    }
    console.log('process success:', users);
  }
   
  getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
  getUsers(true, usersCallback);

/*Proses yang dijalankan secara asynchronous, 
biasanya berpotensi menghasilkan error. 
Misalnya, sebuah fungsi yang mengambil data dari internet akan 
menghasilkan error ketika jaringan kita bermasalah */

//Callback Hell
/* Ketika terdapat banyak fungsi yang berjalan secara asynchronous maka menimbulkan 
masalah ketika sebuah proses perlu dijalankan setelah tahapan lainnya selesai */

//examples

// const userId = { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
function getUserWeather(userId) {
    try {
      const user = getUser(userId);
      const weather = getWeather(user.location);
      return { ...user, ...weather };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
   
  const userWeather = getUserWeather(1);
  console.log(userWeather)