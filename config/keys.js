if (process.env.NODE_ENV === "production") {
	//return keys -- prod
	module.exports = require("./prod");
} else {
	//return keys -- dev
	module.exports = require("./dev");
}
