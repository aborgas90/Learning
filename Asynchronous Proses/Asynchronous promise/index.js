/* Asychronous Promise 
memiliki kondisi yaitu 
pending(keadaan promise sedang berjalan),
fulfilled(keadaan promise yang terpenuhi),
rejected(keadaan promise yang gagal terpenuhi)
*/

function getUser(isOffline, callback) {
    //simulate network delay
    setTimeout(()=>{
        const users = ['John','Jack','Abigail'];

        if(isOffline) {
            callback(new Error('Cannot retrieve user due offline'), null);
            return;
        }
        callback(null, users);
    },3000);
}

//Fungsi diatas bisa diganti dengan  fungsi promise

function _getUser(isOffline){
    
    //return a promise object
    return new Promise((resolve, reject) =>{
        
        //simulate network delay
        setTimeout(()=>{
            const users = ['John','Jack','Bob']

            if(isOffline){
                reject(new Error('Cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000)
    });
}

//cara memanggil nilai yang terdapat didalam promise
//dengan menggunakan .then() .catch()

_getUser(true)
    .then(users => console.log(users))//then() untuk menampilkan data users
    .catch(err => console.log(err.message))//catch() tidak tampil karena promise tidak berstatus reject 
    //jika ingin catch dipanggil maka ubah menjadi true pada _getUser(True) 
