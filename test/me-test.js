const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("Me-page", function () {
    test.beforeEach(function (done) {
        this.timeout(30000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://deel-ramverk.me");
        done();
    });

    test.afterEach(function (done) {
        browser.quit();
        done();
    });


    function assertTitle(target) {
        browser.getTitle().then(function (title) {
            assert.equal(title, target);
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("/" + target));
        });
    }

    function assertH2(target) {
        browser.findElement(By.css("h2")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, target);
            });
        });
    }

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function (element) {
            element.click();
        });
    }



    test.it("Test go to index", function (done) {
        //Go to index

        goToNavLink("Me");
        assertH2("ME");
        matchUrl("me");

        done();
    });

    test.it("Test go to registration", function (done) {
        goToNavLink("Form")
        assertTitle("Me-sida")
        matchUrl("form")
        done();
    })

    test.it("Test go to login", function (done) {
        goToNavLink("Login")
        assertTitle("Me-sida")
        matchUrl("login")
        done();
    })

    test.it("Test go to report 4", function (done) {
        goToNavLink("Kmom04")
        assertTitle("Me-sida")
        matchUrl("reports/week/4")
        done();
    })



});
