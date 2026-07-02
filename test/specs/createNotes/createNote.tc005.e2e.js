const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');

describe('WD054 - CNAddForm TC005 - Create Note', () => {

    it('should create note successfully', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should create note successfully');
        const title =
            'Automation Test ' + Date.now();

        const description =
            'Created by WDIO';

        // await HomePage.openCreateNotes();

        await CreateNotesPage.openAddParagraphNote();

        await CreateNotesPage.enterTitle(title);

        await CreateNotesPage.enterDescription(
            description
        );

        try {
            await driver.hideKeyboard();
        } catch (e) {}
await browser.saveScreenshot('./screenshots/create_notes_page005.png');
        await CreateNotesPage.submitBtn.click();

        await browser.pause(3000);

    });

});