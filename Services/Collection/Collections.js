const { empty } = require("../../helper");
const Collection = require("./Collection");

class Collections {
	static instance = [];

	static run() {
		for (const obj in this.instance)
			if (this.instance[obj] instanceof Collection) this.instance[obj].run();
	}

	static addOrCreateCollection(obj, position) {
		let objName = obj.prototype.constructor.name;

		if (empty(this.instance[objName])) this.instance[objName] = new Collection(obj);

		this.instance[objName].add(position);
	}
}

module.exports = Collections;
