class Collection {
	constructor(type) {
		this._value = [];
		this._type = type;
		this._name = type.prototype.constructor.name;
	}

	get length() {
		return this._value.length;
	}

	push(value) {
		if (value instanceof this._type) this._value.push(value);
		else throw new Error("Value must be instance of " + this._name + " class.");
		return this;
	}

	add(position, ...args) {
		let obj = new this._type(position, ...args);
		this.push(obj);
		return obj;
	}

	get() {
		return this._value;
	}

	run(callback = null) {
		if (callback) {
			this._value.map(callback);
		} else {
			this._value.map(item => {
				item.do();
			});
		}
	}

	map(callback) {
		this._value.map(callback);
	}
}

module.exports = Collection;
