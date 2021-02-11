String.prototype.ucfirst = function () {
    return this[0].toUpperCase() + this.slice(1);
};

String.prototype.lcfirst = function () {
    return this[0].toLowerCase() + this.slice(1);
};

const config = (key, value = null) => {
    let [path, name] = key.split(".");

    if(value !== null) require("./config/" + path)[name] = value;

    return require("./config/" + path)[name];
};

module.exports.config = config;