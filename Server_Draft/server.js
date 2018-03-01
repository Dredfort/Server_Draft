
var db = require('./db');
db.connect();

var User = require('./user');// exports

function run() {
    var vasya = new User("Vasiliy");
    var petya = new User("Peter");

    vasya.Hello(petya);

    console.log(db.getPhrase("Is running!"));
}

if (module.parent) {
    exports.run = run;
}
else {
    run();
}