// class CreateNotesPage {

//     get titleInput() {
//         return $('//*[contains(@content-desc,"title_input")]');
//     }

//     get descriptionInput() {
//         return $('//*[contains(@content-desc,"description_input")]');
//     }

//     get submitBtn() {
//         return $('//*[contains(@content-desc,"submit_btn")]');
//     }

//     get cancelBtn() {
//         return $('//*[contains(@content-desc,"cancel_btn")]');
//     }

//     async createNote(title, description) {

//         await this.titleInput.waitForDisplayed();

//         await this.titleInput.setValue(title);

//         await this.descriptionInput.setValue(description);

//         await browser.saveScreenshot(
//             './screenshots/note_before_submit.png'
//         );

//         await this.submitBtn.click();

//         await browser.pause(3000);

//         await browser.saveScreenshot(
//             './screenshots/note_after_submit.png'
//         );
//     }
// }

// module.exports = new CreateNotesPage();

class CreateNotesPage {

    get addBtn() {
        return $('~create_node_fab');
    }

    get paragraphBtn() {
        return $('~Paragraph');
    }

    get titleInput() {
        return $('//*[contains(@hint,"title_input")]');
    }

    get descriptionInput() {
        return $('//*[contains(@hint,"description_input")]');
    }

    get submitBtn() {
        return $('//*[contains(@content-desc,"submit_btn")]');
    }

    get cancelBtn() {
        return $('//*[contains(@content-desc,"cancel_btn")]');
    }

    async openAddParagraphNote() {

        await this.addBtn.waitForDisplayed({ timeout: 10000 });
        await this.addBtn.click();

        await this.paragraphBtn.waitForDisplayed({ timeout: 10000 });
        await this.paragraphBtn.click();
    }

    async enterTitle(title) {

        await this.titleInput.waitForDisplayed({ timeout: 10000 });

        await this.titleInput.click();
        await browser.keys(title);
    }

    async enterDescription(description) {

        await this.descriptionInput.waitForDisplayed({ timeout: 10000 });

        await this.descriptionInput.click();
        await browser.keys(description);
    }
    async clearTitle() {
    await this.titleInput.waitForDisplayed();
    await this.titleInput.clearValue();
}
}

module.exports = new CreateNotesPage();
