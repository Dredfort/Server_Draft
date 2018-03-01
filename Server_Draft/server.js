
var log = require('./logger')(module);
var db = require('./db');
db.connect();

var User = require('./user');// exports

function run() {
    var vasya = new User("Vasiliy");
    var petya = new User("Peter");

    vasya.Hello(petya);

    log(db.getPhrase("Is running!"));
}

if (module.parent) {
    exports.run = run;
}
else {
    run();
}