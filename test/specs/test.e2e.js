// // // const find = require('appium-flutter-finder')
// // // // const assert = require('assert')
// // // const { expect, browser, $, driver } = require('@wdio/globals')

// // // // describe('My Login application', () => {
// // // //     it('should login with valid credentials', async () => {

// // // //         // const testField  = find.byValueKey('set-mpin')
// // // //         // const mpinField = find.byValueKey('set-mpin');
// // // //         const mpinField = find.byValueKey('auth-pin');
// // // //          const pin = find.byValueKey('auth-pin');

// // // //     console.log('Found finder');

// // // //     await browser.pause(10000);

// // // //     console.log('Finished pause');


// // // // await driver.execute('flutter:enterText', '1111');
// // // // // // await driver.execute('flutter:tap', mpinField);
// // // // // await driver.execute('flutter:enterText', '1111');
// // // //         await driver.elementSendKeys(find.byValueKey('set-mpin'),'1111')
// // // //         // await driver.execute('flutter:waitFor',find.byValueKey('reset-mpin'))
// // // //         await driver.elementSendKeys(find.byValueKey('reset-mpin'),'1111')
// // // //     })
// // // // })

// // // // const find = require('appium-flutter-finder');

// // // describe('Flutter Connection', () => {
// // //     it('Print Flutter Source', async () => {

// // //         const source = await driver.getPageSource();

// // //         console.log(source);

// // //     });

// // //     it('Verify Flutter Driver Connection', async () => {

// // //         await browser.pause(5000);

// // //         const finder = find.byValueKey('auth-pin');
// // // //    const finder = find.byType('PinCodeTextField');
// // //         await driver.execute(
// // //             'flutter:waitFor',
// // //             finder
// // //         );

// // //         console.log('Flutter Widget Found');

// // //     });

// // // });

// // describe('MPIN Login', () => {


// //     it('Enter MPIN using keyboard', async () => {

// //   profileandsettings
// //   notifications
// //   camera
// //   serviceList
// //   homepage
// //     });

// // });



// const menus = [
//     'Profile',
//     // 'notifications',
//     'Alerts',
//     'Services',
//     'Home'
// ];

// describe('Menu Navigation', () => {

//         it('Print Flutter Source', async () => {

//         const source = await driver.getPageSource();

//         // console.log(source);

//     });
//     // menus.forEach(menu => {

//     //     it(`Navigate to ${menu}`, async () => {

//     //         const element = await $(`~${menu}`);

//     //         await element.waitForDisplayed();

//     //         await element.click();

//     //         await browser.saveScreenshot(
//     //             `./screenshots/${menu}.png`
//     //         );

//     //         await browser.back();

//     //     });

//     // });

// });
// // const { $, browser } = require('@wdio/globals');

// // describe('Open Create Your Notes', () => {
    

// //     it('Navigate to Home and open Create Your Notes', async () => {

// //         // Click Home
// //         const homeBtn = await $('~Home');
// //         await homeBtn.waitForDisplayed({ timeout: 10000 });
// //         await homeBtn.click();

// //         await browser.pause(2000);

// //         // Scroll until "Create Your Notes" is visible
// //         const createNotes = await $(
// //             'android=new UiScrollable(new UiSelector().scrollable(true))' +
// //             '.scrollIntoView(new UiSelector().descriptionContains("Create Your Notes"))'
// //         );

// //         await createNotes.waitForDisplayed({ timeout: 10000 });

// //         // Screenshot before click
// //         await browser.saveScreenshot('./screenshots/create_notes_found.png');

// //         // Click Create Your Notes
// //         await createNotes.click();

// //         // Screenshot after navigation
// //         await browser.saveScreenshot('./screenshots/create_notes_page.png');

// //     });

// // });