const configs = {
    /**
     * The port on which we connect to the application
     * `localhost::${port}`
     */
	port: 3000
};

for (let config in configs) {
    module.exports[config] = configs[config];
}
