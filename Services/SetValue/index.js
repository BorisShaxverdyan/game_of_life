const { ifElse, empty } = require("./../../helper");

class SetValue {
	constructor(value) {
		this._value = value;
		this._type = typeof value;
		this._max = null;
		this._min = null;
		this._allowedValues = null;
		this._incrCount = 1;
		this._decrCount = this._incrCount;

		if (this._type === "number" && typeof arguments[1] !== "object") {
			this._max = ifElse(arguments[1], 100);
			this._min = ifElse(arguments[2], 0);
		} else if (Array.isArray(arguments[1]) && !empty(arguments[1])) {
			this._allowedValues = arguments[1];
		} else if (typeof arguments[1] === "object" && !empty(arguments[1])) {
			if (!empty(arguments[1].min, [0])) this._min = arguments[1].min;
			if (!empty(arguments[1].max, [0])) this._max = arguments[1].max;
			if (!empty(arguments[1].allowed)) this._allowedValues = arguments[1].allowed;
			if (!empty(arguments[1].incrCount)) {
				this._incrCount = arguments[1].incrCount;
                this._decrCount = arguments[1].incrCount;
			}
            if(!empty(arguments[1].decrCount)) this._decrCount = arguments[1].incrCount;
		}
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if (this._type === "number" && !Array.isArray(this._allowedValues)) {
			if (value < this._min) return (this._value = this._min);
			else if (value > this._max) return (this._value = this._max);
			else return (this._value = value);
		} else if (Array.isArray(this._allowedValues) && !empty(this._allowedValues)) {
			let val = this._allowedValues.find(item => item === value);
			if (!empty(val)) return (this._value = val);
		} else {
			return (this._value = value);
		}

		console.error("SetValue service error: Wrong type of value");
	}

	incr(count = this._incrCount) {
		this.value = this.value + count;

        return this.value;
	}

	decr(count = this._decrCount) {
		this.value = this.value - count;
        return this.value;
	}
}

module.exports = SetValue;
