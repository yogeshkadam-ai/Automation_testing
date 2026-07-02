const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
describe('WD054 - CNAddForm TC008 - Empty Title', () => {

    it('should validate empty title', async () => {

                allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should validate empty title');
        // await HomePage.openCreateNotes();

        await CreateNotesPage.openAddParagraphNote();

        await CreateNotesPage.enterDescription(
            'Only description entered'
        );

        try {
            await driver.hideKeyboard();
        } catch (e) {}
await browser.saveScreenshot('./screenshots/create_notes_page008.png');
        await CreateNotesPage.submitBtn.click();

        await browser.pause(2000);

    });

});