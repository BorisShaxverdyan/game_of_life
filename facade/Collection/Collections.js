const CollectionsOriginal = require("./../../services/Collection/Collections");

class Collections {
	static get(name) {
		return CollectionsOriginal.instance[name];
	}

	static add(collection, ...args) {
        return CollectionsOriginal.instance[collection].add(...args);
    }
}

module.exports = Collections;
