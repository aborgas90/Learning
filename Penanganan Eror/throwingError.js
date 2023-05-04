// const json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//error examples
//const json = '{ bad json }'//bcs this code not using json format
// const error = '{ "age": 20 }';
 
// try {
//   const user = JSON.parse(error);
 
//   console.log(user.name); // undefined no name property
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//to solve this problem we can use throw which will throw an error into catch

const json = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}


//untuk menampilkan pesan yang sesuai dengan error menggunakan if statement 
try {
  // ...
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}