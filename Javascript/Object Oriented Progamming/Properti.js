//Properti mendifinisikan nilai didalam sebuah class
// class Car{
//     constructor(brand, color, maxSpeed, chassisNumber){
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         //Set a random chassis number
//         this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//     }
// }

class Car{/*Menggunakan Wrapper*/
    constructor(brand, color, maxSpeed, chassisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        //Set a random chassis number
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber(){
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber){
        console.log('You are not allowed to change the chassis number')
    }
}

/*Nilai dari properti biasanya diambil
dari dari argumen constructor agar nilainya
dapat bervariasi setiap kali membuat instance.*/

// const car1 = new Car('BMW', 'red', 200);
// const car2 = new Car('Audi', 'blue', 220);
// const car3 = new Car('BMW', 'black', 250);


/* instance class bersifat mutable atau dapat diubah nilainya.
Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem*/
// car1.chassisNumber = 'BMW-99'

// console.log(car1);
// console.log(car2);
// console.log(car3);

/* Untuk membuat nilai dari properti agar tidak dapat diubah
   menggunkan GET(pengontrolan Nilai) dan SET(Menetapkan Nilai) sebagai wrapper*/

class Mail{
    constructor(reciever,sender,subject,body){
        this.sender = sender;
        this.reciever = reciever;
        this.subject = subject;
        this.body = body;
    }
}


/* Untuk membuat nilai dari properti agar tidak dapat diubah
   menggunkan GET(pengontrolan Nilai) dan SET(Menetapkan Nilai) sebagai wrapper*/
   const car = new Car('BMW', 'red', 200);
   console.log(car.chassisNumber);
   car.chassisNumber = 'BMW-1';
   console.log(car.chassisNumber);

class User{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get Fullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    set Fullname(Fullname){
        const[firstname,lastname] = Fullname.split(' ');
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const user = new User('Wildan', 'Nugroho');
console.log(user);
console.log(user.Fullname);

user.Fullname = 'Samsul Dul'
console.log(user)
console.log(user.Fullname)