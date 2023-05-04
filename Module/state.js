const user = {
    firstName : "Luke",
    lastName : "Skywalker",
    age : 19,
    isJedi : true,
    "Home" : "Banjaran"
};

const spaceship = {
    name : "Bambang",
    manuFacturer : "Purwokerto Engineering",
    maxSpeed : 1200,
    color : "Grey"
};

const statetest = true

// module.exports = user && spaceship;
// export default user && spaceship; //default using for calling one values
export {user ,spaceship,statetest} ;//callings multiple values
//using for another file if we need code in this file. for calling this file we can use import and using requere() methods
// console.log(module)
