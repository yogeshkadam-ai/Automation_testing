class ListPage {

    noteByTitle(title) {
        return $(
            `//*[contains(@content-desc,"${title}")]`
        );
    }

    get okButton() {
        return $('//*[contains(@content-desc,"OK")]');
    }
get searchInput() {
    return $('//*[contains(@hint,"Search")]');
}
get editBtn() {
    return $('~Edit');
}
get deleteBtn() {
    return $('~Remove');
}

async openDelete() {
    await this.deleteBtn.click();
}
async openEdit() {
    await this.editBtn.click();
}

    async openNote(title) {
        const note = await this.noteByTitle(title);

        await note.waitForDisplayed({
            timeout: 10000
        });

        await note.click();
    }

    async closeDialog() {
        await this.okButton.waitForDisplayed({
            timeout: 5000
        });

        await this.okButton.click();
    }


}

module.exports = new ListPage();