//note ! : 1000 miliseconds equals 1 second
function withDrawMoney(amount){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if(amount > 100){//statement amount >100 akan memanggil fungsi reject
                reject(new Error('Not enough money to withdraw'));
            }

            resolve(amount);//resolve untuk pemanggil ketika ada nilainya
        },1000);
    });
}

function buyCinemaTicket(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money > 10){
                reject(new Error('Not enough money to buy ticket'));
            }
            resolve('ticket-1');
        },1000);
    })
}

function goInsideCinema(ticket){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!ticket){
                reject(new Error('no ticket'))
            }

            resolve('enjoy the movie')
        },1000)
    })
}

function wacthMovie(){
    withDrawMoney(10)
        .then((money)=>{
            return buyCinemaTicket(money);
        })

        .then((money)=>{
            return goInsideCinema(money);
        })

        .then((result)=>{
            console.log(result);
        })

        .catch((error)=>{
            console.log(error.message);
        });
}

wacthMovie();
/*
Pada kode di atas, kita bisa melihat bahwa tahapan 
pertama adalah memanggil fungsi withDrawMoney(), 
kemudian buyCinemaTicket(), 
dan terakhir goInsideCinema().
 Setelah tahapan tersebut selesai, 
 nilai akhir dari Promise akan ditampilkan dalam console dengan fungsi console.log(). 
 Jika ada Promise yang di-reject pada salah satu tahapan, 
 ia akan langsung ditangkap oleh catch dan 
 menampilkan error ke console dengan fungsi console.log(). 
 */

 //Note ! : then() harus mengembalikan Promise baru untuk melanjutkan proses chaining karena 
 //nilai yang dikembalikan tersebut akan dibawa ke fungsi 
 //.then() selanjutnya.

 //Note ! : Ada tips dalam melakukan Promise chaining di atas. Anda bisa membuat kode tampak lebih bersih dan singkat dengan 
 //memanfaatkan arrow function implisit return. 
 //Namun, tips ini hanya dapat digunakan jika arrow 
 //function hanya memiliki satu baris kode saja.

//  function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => buyCinemaTicket(money))
//       .then((ticket) => goInsideCinema(ticket))
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error.message));
//   }