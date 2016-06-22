module.exports = function(config) {
  config.set({
  	//basePath: '',

    frameworks: ['mocha', 'chai'],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    files: [
      'test/**/*.js'
    ],

    plugins:[
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-mocha',
        'karma-chai'
    ],

    browsers: ['Chrome', 'Firefox']
  });
};