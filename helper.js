/**
 * Set first char of the string to uppercase
 */
String.prototype.ucfirst = function () {
	return this[0].toUpperCase() + this.slice(1);
};

/**
 * Set first char of the string to lowercase
 */
String.prototype.lcfirst = function () {
	return this[0].toLowerCase() + this.slice(1);
};

/**
 * Removes array element by index
 * 
 * @param {number} index index of element
 */
Array.prototype.remove = function (index) {
    return this.splice(index, 1);
}

const config = key => {
	let [path, name] = key.split(".");

	return require("./config/" + path)[name];
};

module.exports.config = config;
