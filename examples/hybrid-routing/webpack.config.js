var path = require("path");
var CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		// The entry points for the pages
		// pageA: "a/aEntry",
		// pageB: "b/bEntry",

		// This file contains common modules but also the router entry
		"commons.js": "./router"
	},
	output: {
		path: path.join(__dirname, "js"),
		publicPath: 'js/',
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		// Extract common modules from the entries to the commons.js file
		// This is optional, but good for performance.
		new CommonsChunkPlugin("commons.js")
		// The pages cannot run without the commons.js file now.
	]
}
