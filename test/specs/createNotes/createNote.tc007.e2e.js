const allure = require('@wdio/allure-reporter').default;
const CreateNotesPage = require('../../../pages/CreateNotesPage');
const { expect } = require('@wdio/globals');

describe('WD054 - CNAddForm TC007 - Special Characters Validation', () => {

    it('should not allow special characters', async () => {

        allure.addFeature('Create Notes');
        allure.addSeverity('critical');
        allure.addStory('Special Character Validation');

        await CreateNotesPage.enterTitle('Title #$');

        await CreateNotesPage.enterDescription('Invalid $GD');

        try {
            await driver.hideKeyboard();
        } catch (e) { }

        const fields =
            await $$('//android.widget.EditText');

        // Title
        const titleValue =
            await fields[1].getAttribute('text');

        // Description
        const descriptionValue =
            await fields[3].getAttribute('text');

        console.log('Title:', titleValue);
        console.log('Description:', descriptionValue);

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const errors = [];

        if (specialCharRegex.test(titleValue)) {
            errors.push(
                `Title contains special characters: ${titleValue}`
            );
        }

        if (specialCharRegex.test(descriptionValue)) {
            errors.push(
                `Description contains special characters: ${descriptionValue}`
            );
        }
        await browser.saveScreenshot('./screenshots/create_notes_page007.png');
        await CreateNotesPage.submitBtn.click();

        if (errors.length > 0) {
            throw new Error(errors.join('\n'));
        }
    });
});