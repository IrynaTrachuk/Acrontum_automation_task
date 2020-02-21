module.exports.command = function () {
    this
        .url('https://www.google.com/gmail/about/#')
        .waitForElementVisible('body', 1000)
        .useXpath()
        .click("//ul[contains(@class, 'header__nav--ltr')]//a[normalize-space() = 'Sign in']")
        .windowHandles(function (result) {
            this.switchWindow(result.value[1]);
        })
        .waitForElementVisible(`//input[contains(@type, 'email')]`, 5000)
        .setValue(`//input[contains(@type, 'email')]`, 'Your email')
        .click("//span[@class='RveJvd snByac']")
        .waitForElementVisible(`//input[contains(@type, 'password')]`, 5000)
        .setValue(`//input[contains(@type, 'password')]`, 'Your password')
        .click(`//span[@class='RveJvd snByac' and text()='Weiter']`)
        //verify that login was successful - check that button Compose is visible
        .waitForElementVisible(`//div[@class='T-I J-J5-Ji T-I-KE L3']`, 5000)
        //click on profile icon
        .click(`//span[@class='gb_Ia gbii']`)
        .assert.containsText('//div[@class=\'gb_qb\']', 'Your email');

    return this;
};