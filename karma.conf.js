/**
Karma runs the unit / acceptance tests, not the integration tests.
It executes javascript code in each browsers engine that it's configured to work with.
Note, it doesn't execute code in the browser like selenium / integration tests do. It does not mimic user behaviour.
**/

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
      'test/unit/*.js',
      'test/acceptance/*.js'
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