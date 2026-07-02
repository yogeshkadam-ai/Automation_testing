// const HomePage = require('../../pages/HomePage');
// const CreateNotesPage = require('../../pages/CreateNotesPage');
// const ScrollUtil = require('../../utils/ScrollUtil');
// const { expect, browser, $, driver } = require('@wdio/globals')

// describe('Create Notes E2E', () => {

//     it('Create New Note', async () => {

//         // Navigate Home
//         await HomePage.openCreateNotes();

//         // Scroll until Create Your Notes appears
//         // const createNotesCard =
//         //     await ScrollUtil.scrollToText(
//         //         'Create Your Notes'
//         //     );

//         await browser.saveScreenshot(
//             './screenshots/create_notes_card.png'
//         );
//         describe('Create Note E2E', () => {

//     it('Create a new note successfully', async () => {

//         // Step 1 - Open Create Notes  

//         // const createNotes = await $('//*[contains(@text,"Create Your Notes")]');
//         // await createNotes.waitForDisplayed({ timeout: 10000 });

//         // await browser.saveScreenshot('./screenshots/01_create_notes_card.png');
//         // await createNotes.click();

//         // Step 2 - Click FAB (+)

//         const addBtn = await $('//*[contains(@content-desc,"create_node_fab")]');

//         await addBtn.waitForDisplayed({ timeout: 10000 });

//         await browser.saveScreenshot('./screenshots/02_add_button.png');
//         await addBtn.click();

//         // Step 3 - Select Paragraph Note

//         const paragraphBtn = await $('//*[contains(@content-desc,"Paragraph")]');

//         await paragraphBtn.waitForDisplayed({ timeout: 10000 });

//         await browser.saveScreenshot('./screenshots/03_paragraph_option.png');
//         await paragraphBtn.click();

//         // Step 4 - Enter Title

//         const titleField =
//             await $('//*[contains(@hint,"title_input")]');

//         await titleField.waitForDisplayed({ timeout: 10000 });

//         await titleField.click();

// await browser.pause(1000);
//         // await titleField.addValue('Automation Test Note');
// await browser.keys('Automation Test Note');

//         await browser.saveScreenshot('./screenshots/04_title_entered.png');

//         // Step 5 - Enter Description

//         const descriptionField =
//             await $('//*[contains(@hint,"description_input")]');

//         await descriptionField.click();
//         // await descriptionField.addValue(
//         //     'Created using Appium Automation'
//         // );
        
// await browser.pause(1000);

// await browser.keys('Automation Test Note');


//         await browser.saveScreenshot('./screenshots/05_description_entered.png');

//         // Step 6 - Submit
// try {
//     await driver.hideKeyboard();
// } catch (e) {
//     console.log('Keyboard already hidden');
// }
//         const submitBtn =
//             await $('//*[contains(@content-desc,"submit_btn")]');
// console.log("Displayed:", await submitBtn.isDisplayed());
// console.log("Enabled:", await submitBtn.isEnabled());
//         await submitBtn.click();

//         await browser.pause(3000);

//         await browser.saveScreenshot('./screenshots/06_note_saved.png');

//         // Step 7 - Verify Note Created

//         // const createdNote =
//         //     await $('//*[contains(@text,"Automation Test Note")]');

//         // await createdNote.waitForDisplayed({
//         //     timeout: 10000
//         // });

//         // await expect(createdNote).toBeDisplayed();

//         // await browser.saveScreenshot('./screenshots/07_note_verified.png');

//     });

// });

//         // await createNotesCard.click();

//         await browser.pause(3000);


        
//         // Create Note
//         // await CreateNotesPage.createNote(
//         //     'Automation Test Note',
//         //     'Created using Appium WDIO'
//         // );

//     });

// });