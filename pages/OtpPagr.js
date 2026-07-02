class OTPPage{

    get otpField(){
        return $('//*[contains(@hint,"otp_input")]');
        
    }

    get resendBtn(){
        return $('~Resend OTP');
    }
   get submitBtn(){
        return $('~Submit');
    }
    get otpLabel(){
        return $('~OTP');
    }

    get otpMessage(){
        return $('~The OTP has been sent to');
    }

    get email(){
        return $('//*[contains(@content-desc,"@")]');
    }

    get timer(){
        return $('//*[contains(@content-desc,"00:")]');
    }

    async enterOTP(otp){

        await this.otpField.waitForDisplayed();

        await this.otpField.click();

        // await this.otpField.setValue(otp);
await driver.keys(otp.toString().split(''));


    }

    async resend(){

        await this.resendBtn.click();

    }

    async submit(){

        await this.submitBtn.click();

    }

}

module.exports = new OTPPage();