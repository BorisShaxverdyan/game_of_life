const configs = {
	port: 3000
};

for (let config in configs) {
    module.exports[config] = configs[config];
}
