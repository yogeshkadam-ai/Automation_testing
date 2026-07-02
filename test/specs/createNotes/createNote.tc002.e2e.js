const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');

describe('WD054 - CNAddForm TC002 - Title Field', () => {

    it('should accept title input', async () => {
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should accept title input');


        // await HomePage.openCreateNotes();

        // await CreateNotesPage.openAddParagraphNote();

        const testTitle = 'Automation Title';

        await CreateNotesPage.enterTitle(testTitle);

        const text =
            await CreateNotesPage.titleInput.getText();
await browser.saveScreenshot('./screenshots/create_notes_page002.png');
        console.log(text);

    });

});