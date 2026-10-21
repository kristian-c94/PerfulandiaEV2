module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'webpack'],

        files: [
            'src/**/*.test.js',
            'src/**/*.spec.js',
            'src/**/*.test.jsx',
            'src/**/*.spec.jsx'
        ],

        preprocessors: {
            'src/**/*.test.js': ['webpack', 'sourcemap'],
            'src/**/*.spec.js': ['webpack', 'sourcemap'],
            'src/**/*.test.jsx': ['webpack', 'sourcemap'],
            'src/**/*.spec.jsx': ['webpack', 'sourcemap']
        },

        webpack: {
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    },
                    // Manejo de imágenes, videos y archivos estáticos en Webpack 5
                    {
                        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/i,
                        type: 'asset/resource'
                    }
                ]
            },
            resolve: {
                extensions: ['.js', '.jsx']
            }
        },

        browsers: ['Chrome'],
        reporters: ['progress'],
        singleRun: true,
        logLevel: config.LOG_INFO
    });
};