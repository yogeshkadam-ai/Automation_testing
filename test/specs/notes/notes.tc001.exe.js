
const { expect, browser, $, driver } = require('@wdio/globals')
const allure = require('@wdio/allure-reporter').default;
const notesData = require('../../../testData/notesData');
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
// const { expect, browser } = require('@wdio/globals');

const ListPage = require('../../../pages/Listpage');
describe('WD054 - CNMainList TC001 Create Note', () => {

    it('should create note', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('User creates paragraph note');

        // await HomePage.openCreateNotes();

        await CreateNotesPage.openAddParagraphNote();

        await CreateNotesPage.enterTitle(
            notesData.noteTitle
        );

        await CreateNotesPage.enterDescription(
            notesData.noteDescription
        );
        try {
            await driver.hideKeyboard();
        } catch (e) {
            console.log('Keyboard already hidden');
        }
await browser.saveScreenshot('./screenshots/create_notes_page009.png');
        await CreateNotesPage.submitBtn.click();

    });

});

describe('WD054 - CNMainList TC002 Verify Note In List', () => {

    it('should display newly created note', async () => {

        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should display newly created note');
        const note =
            await $(
                `//*[contains(@content-desc,"${notesData.noteTitle}")]`
            );
await browser.saveScreenshot('./screenshots/create_notes_page010.png');
        await expect(note).toBeDisplayed();

    });

});
describe('WD054 - CNMainList TC003 Open Note', () => {

    it('should open note details', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should open note details');

        const note =
            await $(
                `//*[contains(@content-desc,"${notesData.noteTitle}")]`
            );
await browser.saveScreenshot('./screenshots/create_notes_page011.png');
        await note.click();

    });

});
describe('WD054 - CNMainList TC004 Verify Title and Description', () => {

    it('should verify title', async () => {

        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should verify title');
        // Verify dialog
        const dialog =
            await $(
                `//*[contains(@content-desc,"${notesData.noteTitle}")]`
            );
        console.log(dialog);
        const content =
            await dialog.getAttribute('content-desc');

        expect(content)
            .toContain(notesData.noteTitle);

        expect(content)
            .toContain(notesData.noteDescription);

        console.log('Title and Description Verified');

        // Click OK button
        const okBtn =
            await $('//*[contains(@content-desc,"OK")]');

        await okBtn.waitForDisplayed({
            timeout: 5000
        });
        await browser.saveScreenshot('./screenshots/create_notes_page012.png');

        await okBtn.click();

    });

});

describe('WD054 - CNMainList TC005 Search Note', () => {

    it('should search note', async () => {

        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should search note');
        await ListPage.searchInput.setValue(
            notesData.noteTitle
        );
        const searchBox = await ListPage.searchInput;
        await searchBox.click();

        await browser.pause(1000);

        await browser.keys(notesData.noteTitle);
        const note =
            await $(
                `//*[contains(@content-desc,"${notesData.noteTitle}")]`
            );
await browser.saveScreenshot('./screenshots/create_notes_page013.png');
        await expect(note).toBeDisplayed();
        // if (await note.isDisplayed()) {
        //     const fields =
        //         await $$('//android.widget.EditText');

        //     const titleValue =
        //         await fields[1].getAttribute('text');

        //     for (let i = 0; i < titleValue.length; i++) {
        //         await browser.keys('Backspace');
        //     }
        //     try {
        //         await driver.hideKeyboard();
        //     } catch (e) { }

        // }
    });

});
describe('WD054 - CNMainList TC006 Edit Note', () => {

    it('should edit note', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should edit note');
        const note =
            await $(
                `//*[contains(@content-desc,"${notesData.noteTitle}")]`
            );

        await note.longPress();

        await ListPage.openEdit();
        const source = await driver.getPageSource();
        console.log(source);

        //   const fields =
        //         await $$('//android.widget.EditText');

        //     const titleValue =
        //         await fields[1].getAttribute('text');

        //     for (let i = 0; i < titleValue.length; i++) {
        //         await browser.keys('Backspace');
        //     }

        await CreateNotesPage.enterTitle(
            'UPDATED_NOTE'
        );
        try {
            await driver.hideKeyboard();
        } catch (e) {
            console.log('Keyboard already hidden');
        }
        await browser.saveScreenshot('./screenshots/create_notes_page014.png');
        await CreateNotesPage.submitBtn.click();

    });

});
describe('WD054 - CNMainList TC007 Verify Edited Note', () => {

    it('should verify edited note', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should verify edited note');

        const updated =
            await $('//*[contains(@content-desc,"UPDATED_NOTE")]');
await browser.saveScreenshot('./screenshots/create_notes_page015.png');
        await expect(updated).toBeDisplayed();

    });

});
describe('WD054 - CNMainList TC008 Delete Note', () => {

    it('should delete note', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should delete note');

        const note =
            await $(
                `//*[contains(@content-desc,"UPDATED_NOTE")]`
            );

        await note.longPress();
await browser.saveScreenshot('./screenshots/create_notes_page016.png');
        await ListPage.openDelete();


    });

});
describe('WD054 - CNMainList TC009 Verify Deleted', () => {

    it('should verify note removed', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should verify note removed');

        const notes =
            await $$(
                '//*[contains(@content-desc,"UPDATED_NOTE")]'
            );
await browser.saveScreenshot('./screenshots/create_notes_page017.png');
        expect(notes.length)
            .toBe(0);

    });

});