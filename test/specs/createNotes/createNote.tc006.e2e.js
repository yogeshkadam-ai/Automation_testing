const allure = require('@wdio/allure-reporter').default;
const HomePage = require('../../../pages/HomePage');
const CreateNotesPage = require('../../../pages/CreateNotesPage');
describe('WD054 - CNAddForm TC006 - Title Max Length', () => {

    it('should allow maximum 50 characters', async () => {

                allure.addFeature('Create Notes');

        allure.addSeverity('critical');

        allure.addStory('should allow maximum 50 characters');
        const longTitle =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // await HomePage.openCreateNotes();

        await CreateNotesPage.openAddParagraphNote();

        await CreateNotesPage.enterTitle(
            longTitle
        );


                // const source = await driver.getPageSource();
        
                // console.log(source);
     const fields =
    await $$('//android.widget.EditText');

const titleValue =
    await fields[1].getAttribute('text');
            

        console.log(
            'Length:',
            titleValue.length
        );


await browser.saveScreenshot('./screenshots/create_notes_page006.png');

         expect(titleValue.length).toBe(50);

    });

});