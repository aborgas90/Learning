// import user from "./state.js"
import {user as people , spaceship} from './state.js' // as using for change name of variables

const displayuser = people => {
    for (const type in people) {
        console.log(type)
    }
}

displayuser(people);
console.log(people)
console.log(spaceship)

