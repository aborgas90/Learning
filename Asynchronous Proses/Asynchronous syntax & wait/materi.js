/*Sintaks async dan await memungkinkan kita untuk menulis kode 
dalam menangani proses asynchronous 
Promise-based dengan cara yang sama seperti kode synchronous. */

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'));
        }
  
        resolve(amount);
      }, 1000);
    });
  }

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
  
        resolve('ticket-1');
      }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'));
        }
  
        resolve('enjoy the movie');
      }, 1000);
    });
}

function wacthMovie(){
    withDrawMoney(10)
        .then((money)=> buyCinemaTicket(money))
        .then((ticket)=> goInsideCinema(ticket))
        .then((result)=> console.log(result))
        .catch((error)=> console.log(error.message))
}


//how to use function of async() & await()

/*
await use to take value(data) from promise
so we no need to use .then()
*/

async function wacthMovie(){
    try{
        const money = await withDrawMoney(10);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        console.log(result);
    }catch(error){
        console.log(error);
    }
}

//note ! : Ketahuilah bahwa setiap fungsi yang
//didefinisikan dengan kata 
//async akan selalu mengembalikan sebuah Promise
/*Contoh pada kode di atas, kita bisa menggunakan fungsi .then() 
setelah pemanggilan fungsi watchMovie() seperti ini. */

wacthMovie()//.then(()=> console.log('done'));