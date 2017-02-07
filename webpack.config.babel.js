import path from "path"

const PATHS = {
	src: path.join(__dirname, "/"),
}

const reactExternal = {
	root: "React",
	commonjs2: "react",
	commonjs: "react",
	amd: "react"
};

const styledComponentsExternal = {
	root: "StyledComponents",
	commonjs2: "styled-components",
	commonjs: "styled-components",
	amd: "styled-components"
};

export default () => ({
		entry: "./index.js",
		externals: {
			"react": reactExternal,
			"styled-components": styledComponentsExternal,
		},
		output: {
			path: path.join(__dirname, "dist"),
			filename: "[name].js"
		},
		resolve: {
			extensions: [
				"*",
				".js"
			],
		},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			include: PATHS.src,
			options: {
				// the babelrc in root is used to traspile only this config
				babelrc: false,
				// project settings are defined here
				presets: [ [ "env", { loose: true, modules: false } ], "react" ]
			}
		}]
	}
})
