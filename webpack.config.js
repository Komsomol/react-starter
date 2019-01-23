var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.html$/,
			use: [{
				loader: "html-loader"
			}]
		},
		{
			test: /\.css$/,
			use:[ "style-loader", "css-loader"]
		}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: "src/index.html"
	})]
}