/*Methode*/
/*Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut.*/
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = this._generateChassisNumber();
    }

    get chassisNumber() {
      return this._chassisNumber;
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

    _generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }

const car = new Car('BMW', 'red', 200);

car.drive();
car.turn('left');
car.reverse();

//Metode Mail
class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }

    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }

    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);

      setTimeout(() => {
        this.send();
      }, delay);
    }

    saveAsDraft() {
      console.log('Saving mail as draft');
    }
  }

