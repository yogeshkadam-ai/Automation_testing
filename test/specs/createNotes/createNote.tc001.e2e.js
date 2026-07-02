const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
const { expect } = require('@wdio/globals');

describe('WD054 - CNMainList TC001 - Open Add Note Page', () => {

    it('should open paragraph note page', async () => {
        
        
        allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('User creates paragraph note');

        await HomePage.openCreateNotes();

        await CreateNotesPage.openAddParagraphNote();


        await expect(
            CreateNotesPage.titleInput
        ).toBeDisplayed();

        await expect(
            CreateNotesPage.descriptionInput
        ).toBeDisplayed();

        await expect(
            CreateNotesPage.submitBtn
        ).toBeDisplayed();
await browser.saveScreenshot('./screenshots/create_notes_page001.png');
    });

});
