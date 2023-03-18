/*Member visibility bisa disebut juga sebagai hak akses
pada sebuah properti dan method di dalam class*/
// class Car {
//     constructor(brand, color, maxSpeed) {
//       this.brand = brand;
//       this.color = color;
//       this.maxSpeed = maxSpeed;
//       this._chassisNumber = this._generateChassisNumber();
//     }

//     get chassisNumber() {
//       return this._chassisNumber;
//     }

//     set chassisNumber(chassisNumber) {
//       console.log('you are not allowed to change the chassis number');
//     }

//     // Methods
//     drive() {
//       console.log(`${this.brand} ${this.color} is driving`);
//     }

//     reverse() {
//       console.log(`${this.brand} ${this.color} is reversing`);
//     }

//     turn(direction) {
//       console.log(`${this.brand} ${this.color} is turning ${direction}`);
//     }

//     _generateChassisNumber() {
//       return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
//     }
//   }

//   const car = new Car('BMW', 'red', 200);

//   console.log(car._chassisNumber);
//   car._chassisNumber = 'BMW-1';
//   console.log(car._chassisNumber);
//   console.log(car._generateChassisNumber());

/*properti atau method bisa dijadikan sebagai penanda bahwa ia dianggap private.
Masalahnya adalah cara tersebut tidak benar-benar memproteksi hak aksesnya.
Contoh, pada class Car, kita sudah membuat properti _chassisNumber dan method _generateChassisNumber() dengan tanda underscore*/

/*Untuk Hak Akses diberikan dengan tanda '#' pada awal penamaan properti atau methode  */
class Car {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }

  const car = new Car('BMW', 'red', 200);
  car.#generateChassisNumber();//SYNTAX ERROR
  console.log(car.#chassisNumber());//SYNTAX ERROR

