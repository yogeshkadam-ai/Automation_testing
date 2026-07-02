class ProfilePage {

    get logoutMenu() {
        return $('//*[contains(@content-desc,"logout_btn")]');
    }

    get submitBtn() {
        return $('//*[@text="Sync & Logout" or @text="Yes"]');
    }

    get cancelBtn() {
        return $('//*[@text="Logout" or @text="Cancel"]');
    }

    async clickLogout() {
        await this.logoutMenu.waitForDisplayed();
        await this.logoutMenu.click();
    }

    async clickSubmit() {
        await this.submitBtn.click();
    }

    async clickCancel() {
        await this.cancelBtn.click();
    }
    async getDialogMessage() {
        const dialog = await $(
            '//android.view.View[contains(@content-desc,"Unsynced")]'
        );

        return await dialog.getAttribute('content-desc');
    }
      async getDialogMessageLogout() {
        const dialog = await $(
            '//android.view.View[contains(@content-desc,"Are you sure")]'
        );

        return await dialog.getAttribute('content-desc');
    }
}

module.exports = new ProfilePage();