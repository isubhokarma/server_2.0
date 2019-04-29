const proxy = require("http-proxy-middleware");

module.exports = function(app) {
	app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
};

//"changeOrigin": true, -- package.json
