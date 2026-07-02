const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
const { expect } = require('@wdio/globals');

describe('WD054 - CNAddForm TC004 - Cancel Button', () => {

    it('should navigate back on cancel', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should navigate back on cancel');
        // await HomePage.openCreateNotes();

        // await CreateNotesPage.openAddParagraphNote();
        try {
            await driver.hideKeyboard();
        } catch (e) {
            console.log('Keyboard already hidden');
        }

        await CreateNotesPage.cancelBtn.click();

        await browser.pause(2000);
await browser.saveScreenshot('./screenshots/create_notes_page004.png');
        const addBtn =
            await $('~create_node_fab');

        await expect(addBtn).toBeDisplayed();

    });

});