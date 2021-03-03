const Config = require("./services/Config");
const Random = require("./Services/Random");

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
};

/**
 * Get random item
 */
Array.prototype.random = function () {
	return Random.arrayItem(this);
};

const isset = value => value !== undefined;

const empty = (value, allowed = []) => {
	let undefinedValue;

	let emptyValues = [undefinedValue, null, false, 0, "", "0"];

	allowed.map(item => {
		let index = emptyValues.indexOf(item);
		if (index !== -1) emptyValues.splice(index, 1);
	});

	for (let i = 0; i < emptyValues.length; i++) if (value === emptyValues[i]) return true;

	if (typeof value === "object" && Object.keys(value).length === 0) return true;

	return false;
};

const ifElse = (value, defaultValue, allowed = []) =>
	empty(value, allowed) ? defaultValue : value;

const config = (key, value = null) => value ? Config.set(key, value) : Config.get(key);

module.exports.config = config;
module.exports.empty = empty;
module.exports.ifElse = ifElse;
module.exports.isset = isset;
