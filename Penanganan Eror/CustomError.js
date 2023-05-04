class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}


let json = '{"age" : 30}';

try{
    let user = JSON.parse(json);//conversion string to object

    if(!user.name){
        throw new SyntaxError("'name' is required")
    }

    if(!user.age){
        throw new SyntaxError("'age' is required")
    }

    console.log(user.name)
    console.log(user.age)
}catch(error){
    if (error instanceof SyntaxError){
        console.log(`JSON Sytax Error : ${error.message}`)
    }else if(error instanceof ValidationError){
        console.log(`Invalid data : ${error.message}`)
    }else if(error instanceof ReferenceError){
        console.log(error.message)
    }else{
        console.log(error.stack)
    }
}
