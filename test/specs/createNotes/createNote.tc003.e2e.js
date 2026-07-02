const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
describe('WD054 - CNAddForm TC003 - Description Field', () => {

    it('should accept description input', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should accept description input');
        // await HomePage.openCreateNotes();

        // await CreateNotesPage.openAddParagraphNote();

        await CreateNotesPage.enterDescription(
            'This is automation testing'
        );
await browser.saveScreenshot('./screenshots/create_notes_page003.png');
        await browser.pause(2000);

    });

});