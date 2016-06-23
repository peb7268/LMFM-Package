/**
Reference:
https://www.npmjs.com/package/selenium-webdriver
https://simpleprogrammer.com/2014/02/03/selenium-with-node-js/
https://gist.github.com/patoi/5330701
my TDD youtube channel

Notes: 
- this.timeout controls the timeout for async stuff. Keeps the done() method from timing out.
- Make sure to start the selenium Jar before running the tests.
- Run the integration tests by typing npm run test:integration

TODOs: 
- add in chai and chai expect style syntax
- add in check to only create a new driver if there is no current one.
**/

var assert  	= require('assert'), 
	fs 			= require('fs'), 
	webdriver 	= require('selenium-webdriver'), 
	colors 		= require('colors'),
	driver;

//Run it once before tests
before(function(done) {
	this.timeout(5000);
    driver = new webdriver
    .Builder()
    .withCapabilities({
        'browserName': 'chrome'
    })
    .build();

    // error handling - if you want do st
    process.on('uncaughtException', function(err) {
        console.log("My error handler... " + err);

        //Record a screenshot on error
        if (driver) {
            driver.takeScreenshot().then(function(img) {
            	fs.writeFileSync(__dirname + "/logs/screenshot.png", new Buffer(img, 'base64'));
            });
        }
    });

    //Open start page - to verify this thing's on.
    driver.get('http://google.com').then(function() {
        console.log("open google.com...");
        done();
    });
});


//Tests
describe('Google Search', function() {
    it('should work', function(done) {
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver\n').then(function() {
            return searchBox.getAttribute('value');
        }).then(function(value) {
            assert.equal(value, 'webdriver');
            done();
        });
    });
});


//Tear down - run once after tests
after(function(done) {
    // works with promise
    driver.quit().then(done);
});