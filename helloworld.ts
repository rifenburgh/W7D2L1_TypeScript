//Interface contains the properties that your constructor MUST have
interface UserInterface {
  email:                  string;
  encryptedPassword:      string;
  birthday:               Date;
}
//Public class and constructor that will implement Interface properties/variables once implemented
class User implements UserInterface {
  constructor (public email:string,  public encryptedPassword:string,  public birthday:Date) {
  }
  getAge() {
    //compare birthday with today and calculate the user's age
  }
}

class SuperUser implements UserInterface {
  constructor (public email:string, public encryptedPassword:string, public birthday:Date) {

  }
  getAge() {

  }
}


/* helloworld.js --from lesson-- */
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.sayHi();

//Allows TS variable be any type of variable
let myNumber: any         = 77;
