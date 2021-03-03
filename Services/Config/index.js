const { empty } = require("../../helper");

class Config {
	static cache = {};

	static get(key) {
		console.log(empty);
		if (empty(this.cache[key])) {
			let [path, name] = key.split(".");
			this.cache[key] = require("./../../config/" + path)[name];
		}

		return this.cache[key];
	}

	static set(key, value) {
		return (this.cache[key] = value);
	}
}

module.exports = Config;
