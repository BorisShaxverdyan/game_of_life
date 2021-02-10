const configs = {
	width: 10,
	height: 10,
};

for (let config in configs) {
    module.exports[config] = configs[config];
}
