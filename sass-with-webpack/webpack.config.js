const osPath = require('path');

module.exports = {
    entry: 'path to main js file',
    output: {
        path: osPath.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-map'
};
