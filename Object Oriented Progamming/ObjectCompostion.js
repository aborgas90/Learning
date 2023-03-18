//Object Compostion
/* object composition, dia tidak memperdulikan peran,
melainkan kode distrukturkan
berdasarkan kemampuan yang dapat dilakukan */

class Developer{
    constructor(name){
        this.name = name;
    }

    commitChanges(){
        console.log(`${this.name} is committing changes ...`)
    }
}

function canBuildUI(developer){
    return{
        buildUI : () => {
            console.log(`${developer.name} is building UI ...`)
        }
    }
}

function canBuildAPI(developer){
    return{
        buildApi : () => {
            console.log(`${developer.name} is deploying app ...`)
        }
    }
}

function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
  }

/* untuk memudahkan membuat object kita bisa membuat
fungsi sebagai object creator dengan mengomposisikan
kemampuan yang dibutuhkan dapat menggunakan methode : Object.assign()*/
//Example
function createFrontEndDeveloper (name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer))
}

function createBackEndDeveloper (name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer))
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}


function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildApi();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);

const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);

const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildApi();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
 