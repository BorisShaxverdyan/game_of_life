class Collection {
	constructor(type) {
		this._value = [];
		this._type = type;
		this._name = new type().constructor.name;
	}

	push(value) {
		if (value instanceof this._type) this._value.push(value);
		else
			throw new Error(
				"Value must be instance of " + this._name + " class."
			);
		return this;
	}

	add(...args) {
		let obj = new this._type(...args);
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

class Collections {
	constructor(collections = []) {
		this.collections = collections;
	}

	run() {
		this.collections.map(collection => collection.run());
	}

	static addOrCreateCollection(collections, obj, x, y) {
		let objName = obj.constructor.name;

		if (!collections[objName]) collections[objName] = new Collection(obj);

		collections[objName].add(x, y);
	}
}

module.exports.Collection = Collection;
module.exports.Collections = Collections;
