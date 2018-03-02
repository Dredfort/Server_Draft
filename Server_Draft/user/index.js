
var db = require('../db');

var log = require('../logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.Hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};

module.exports = User;