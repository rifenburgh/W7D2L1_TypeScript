var User = (function () {
    function User(email, encryptedPassword, birthday) {
        this.email = email;
        this.encryptedPassword = encryptedPassword;
        this.birthday = birthday;
    }
    User.prototype.getAge = function () {
    };
    return User;
}());
var SuperUser = (function () {
    function SuperUser(email, encryptedPassword, birthday) {
        this.email = email;
        this.encryptedPassword = encryptedPassword;
        this.birthday = birthday;
    }
    SuperUser.prototype.getAge = function () {
    };
    return SuperUser;
}());
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
var myNumber = 77;
