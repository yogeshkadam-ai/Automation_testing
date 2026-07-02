class BasePage {

    async wait(locator) {
        await locator.waitForDisplayed({ timeout: 10000 });
    }

    async click(locator) {
        await this.wait(locator);
        await locator.click();
    }

    async type(locator, value) {
        await this.wait(locator);
        await locator.click();
        await locator.clearValue();
        await locator.setValue(value);
    }

    async screenshot(name) {
        await browser.saveScreenshot(`./screenshots/${name}.png`);
    }

    async hideKeyboard() {
        try {
            await driver.hideKeyboard();
        } catch (e) {}
    }

    async restartApp() {

        await driver.execute('mobile: terminateApp', {
            appId: 'com.farmerp.app'
        });

        await browser.pause(2000);

        await driver.execute('mobile: activateApp', {
            appId: 'com.farmerp.app'
        });

        await browser.pause(4000);
    }

}

module.exports = new BasePage();