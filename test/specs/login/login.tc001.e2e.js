
const LoginPage = require('../../../pages/LoginPage');
const OTPPage = require('../../../pages/OtpPagr');

const { getExcelData } = require('../../../utils/excelReader');

describe('LOGOUT_001', () => {

    it('Verify offline entry popup appears', async () => {
       

//   const testData = getExcelData('Sheet1');

//         console.log(testData);
        // await ProfilePage.clickLogout();

        // const title = await ProfilePage.getDialogMessage();
        // const message = await ProfilePage.getDialogMessage();



        // await expect(title).toContain('Unsynced');

        // await expect(message)
        //     .toContain('Sync');
    });

});

const data = getExcelData('Sheet1');

describe('Login Module', () => {

    // beforeEach(async () => {

    //     // Restart app before every testcase

    //     await driver.terminateApp('com.farmerp.app');
    //     await driver.activateApp('com.farmerp.app');

    // });

    it('TC001 Valid Login', async () => {


        const tc = data[0];

        await LoginPage.login(
            tc.ClientID,
            tc.Username,
            tc.Password
        );
 
        const otp = await $('//*[contains(@text,"OTP")]');

        await otp.waitForDisplayed({ timeout:10000 });
    
        await browser.saveScreenshot('./screenshots/TC001.png');

    });

    // it('TC002 Empty Client ID', async () => {

    //     const tc = data[1];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Client")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC003 Empty Username', async () => {

    //     const tc = data[2];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Username")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC004 Empty Password', async () => {

    //     const tc = data[3];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Password")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC005 Empty All Fields', async () => {

    //     const tc = data[4];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     await browser.saveScreenshot('./screenshots/TC005.png');

    // });

    // it('TC006 Invalid Client', async () => {

    //     const tc = data[5];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Invalid")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC007 Invalid Username', async () => {

    //     const tc = data[6];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Invalid")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC008 Invalid Password', async () => {

    //     const tc = data[7];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Invalid")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC009 SQL Injection', async () => {

    //     const tc = data[8];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Invalid")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC010 Long Username', async () => {

    //     const tc = data[9];

    //     await LoginPage.login(
    //         tc.ClientID,
    //         tc.Username,
    //         tc.Password
    //     );

    //     const error = await $('//*[contains(@text,"Username")]');

    //     await expect(error).toBeDisplayed();

    // });

    // it('TC011 Password Visibility', async () => {

    //     const eye = await LoginPage.passwordEye;

    //     await eye.click();

    //     await browser.pause(1000);

    //     await eye.click();

    //     await browser.saveScreenshot('./screenshots/PasswordVisibility.png');

    // });

    // it('TC012 Forgot Password Navigation', async () => {

    //     await (await LoginPage.forgotPassword).click();

    //     await browser.pause(2000);

    //     await browser.saveScreenshot('./screenshots/ForgotPassword.png');

    // });

    // it('TC013 Contact Us Navigation', async () => {

    //     await (await LoginPage.contactUs).click();

    //     await browser.pause(2000);

    //     await browser.saveScreenshot('./screenshots/ContactUs.png');

    // });

});


const dataOtp = getExcelData('OTP');

describe('OTP Module', () => {

//      it('TC002 Invalid OTP', async () => {
// const edits = await $$('//android.widget.EditText');

// console.log('EditText Count =', edits.length);

// for (let i = 0; i < edits.length; i++) {
//     console.log(
//         'Index:', i,
//         'Displayed:', await edits[i].isDisplayed(),
//         'Enabled:', await edits[i].isEnabled(),
//         'Focused:', await edits[i].getAttribute('focused')
//     );
// }
//         await OTPPage.enterOTP(dataOtp[1].OTP);

//         const error =
//             await $('//*[contains(@text,"Invalid")]');

//         await expect(error).toBeDisplayed();

//     });

    it('TC001 Valid OTP', async () => {
                const source = await driver.getPageSource();

        console.log(source);
        await OTPPage.enterOTP(dataOtp[0].OTP);
        // await OTPPage.submit();

        await browser.saveScreenshot('./screenshots/OTP_Valid.png');

        const pinField = await driver.$('//android.widget.EditText');

await pinField.waitForDisplayed();
await pinField.click();
await driver.keys(['1', '2', '3', '4']);

        const pinField2 = await driver.$('//android.widget.EditText');

await pinField2.waitForDisplayed();
await pinField2.click();
await driver.keys(['1', '2', '3', '4']);

    });

   

});