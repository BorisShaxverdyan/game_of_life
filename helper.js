String.prototype.ucfirst = function () {
	return this[0].toUpperCase() + this.slice(1);
};

String.prototype.lcfirst = function () {
	return this[0].toLowerCase() + this.slice(1);
};

const config = key => {
	let [path, name] = key.split(".");

	return require("./config/" + path)[name];
};

module.exports.config = config;
