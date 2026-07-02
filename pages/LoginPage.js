const { $ } = require('@wdio/globals');

class LoginPage {

    get clientId() {
        return (async () => (await $$('//android.widget.EditText'))[0])();
    }

    get username() {
        return (async () => (await $$('//android.widget.EditText'))[1])();
    }

    get password() {
        return (async () => (await $$('//android.widget.EditText'))[2])();
    }

    get generateOTP() {
        return $('~Generate OTP');
    }

    get forgotPassword() {
        return $('~Forgot Password');
    }

    get contactUs() {
        return $('~Contact Us');
    }

    get passwordEye() {
        return $('//android.widget.ImageView');
    }

    async login(client, user, pass) {

        const clientField = await this.clientId;
        await clientField.click();
        await clientField.clearValue();
        await clientField.setValue(client);
        try {
            await driver.hideKeyboard();
        } catch (e) {}

        const usernameField = await this.username;
        await usernameField.click();
        await usernameField.clearValue();
        await usernameField.setValue(user);
        try {
            await driver.hideKeyboard();
        } catch (e) {}

        const passwordField = await this.password;
        await passwordField.click();
        await passwordField.clearValue();
        await passwordField.setValue(pass);

        try {
            await driver.hideKeyboard();
        } catch (e) {}

        await (await this.generateOTP).click();
    }

}

module.exports = new LoginPage();