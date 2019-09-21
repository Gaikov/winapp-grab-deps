module.exports = {
    target: 'node',
    mode: 'none',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: [
                    /node_modules/,
                    /test/
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
	    filename: "winapp-grab-deps.js"
    }
};