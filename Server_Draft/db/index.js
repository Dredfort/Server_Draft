var phrases;

exports.connect = function () {
    phrases = require('./ru.json');
}

exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw new Error("нет такой фразы:" + name);
    }
    return phrases[name];
}