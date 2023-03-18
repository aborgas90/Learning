/*Di JavaScript sudah terdapat built-in class atau class bawaan,
seperti Date, Object, Array, Math, dan String.
Class bawaan dapat kita manfaatkan untuk berbagai hal,
mulai dari manipulasi data-data terkait dengan array,operasi matematika,
manipulasi karakter, ataupun manipulasi objek.*/

//Example : Date
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});

const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);

//Example : Array
const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray);

class UniqueArray extends Array {
    constructor(...args) {
      // make sure args is unique before passing it to super
      const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

      super(...uniqueValue);
    }

    add(item) {
      // make sure only unique item is added
      if (!this.includes(item)) {
        super.push(item);
      }
    }
  }

  const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
  console.log(someArray); // ['a', 'b', 'c']
  someArray.add('d');
  console.log(someArray); // ['a', 'b', 'c', 'd']
  someArray.add('a');
  console.log(someArray); // ['a', 'b', 'c', 'd']

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
