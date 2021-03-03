let configs = {
	list: ["spring", "summer", "autumn", "winter"],
};

for (let config in configs) module.exports[config] = configs[config];
