module.exports = {
    'test 1 login to gmail': function (browser) {
        browser
            .url('https://www.google.com/gmail/about/#')
            .waitForElementVisible('body', 1000)
            .useXpath()
            .click("//ul[contains(@class, 'header__nav--ltr')]//a[normalize-space() = 'Sign in']")
            .windowHandles(function (result) {
                this.switchWindow(result.value[1]);
            })
            .waitForElementVisible(`//input[contains(@type, 'email')]`, 5000)
            .setValue(`//input[contains(@type, 'email')]`, 'iratrachuk1@gmail.com')
            .click("//span[@class='RveJvd snByac']")
            .waitForElementVisible(`//input[contains(@type, 'password')]`, 5000)
            .setValue(`//input[contains(@type, 'password')]`, 'KengurMu28')
            .click(`//span[@class='RveJvd snByac' and text()='Weiter']`)
            //verify that login was successful - check that button Compose is visible
            .waitForElementVisible(`//div[@class='T-I J-J5-Ji T-I-KE L3']`, 5000)
            //click on Inbox
            .click(`//a[@class='J-Ke n0' and text()='Inbox']`)
            //.waitForElementPresent(`//div[@class='bsU']`, 2000) - if number of unread emails even exists
            if (browser.assert.elementPresent(`//div[@class='bsU']`)) {

            }
            .end()
    }
};