import path from "path"

const reactExternal = {
	root: "React",
	commonjs: "react",
	commonjs2:"react",
	amd: "react"
};
const styledComponentsExternal = {
	commonjs: "styled-components",
	commonjs2: "styled-components/lib/index.js",
	amd: "styled-components"
};

const babel = {
				test: /.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					babelrc: false,
					cacheDirectory: true,
					presets: [ [ "latest", { modules: false } ], "react", "stage-1" ],
					plugins: [ "transform-object-rest-spread" ]
				}
			}

export default () => ({
		entry: "./index.js",
		externals: {
			"react":  reactExternal,
			"styled-components": styledComponentsExternal
		},
		output: {
			filename: "styled-flex.js",
			path: "dist",
			libraryTarget: "umd",
			library: "StyledFlex" // global variable
		},
		resolve: {
			extensions: [ "*", ".js" ],
		},
	module: {
		rules: [ babel ]
	}
})
