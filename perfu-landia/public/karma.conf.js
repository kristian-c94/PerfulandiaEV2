module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/**/*.spec.js',
      'src/**/*.spec.jsx'
    ],

    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/*.spec.jsx': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};