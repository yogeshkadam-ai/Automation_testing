class HomePage {

    get homeBtn() {
        return $('~Home');
    }

    get createYourNotes() {
        return $('//*[contains(@text,"Create Your Notes")]');
    }
    get floatingAdd(){
         return $('//*[contains(@content-desc,"create_node_fab")]');
    }

    get floatingAddParagraph(){
         return $('//*[contains(@content-desc,"Paragraph")]');
    }
    async openCreateNotes() {
        
        await this.homeBtn.waitForDisplayed();
        await this.homeBtn.click();

        
        
                await browser.pause(2000);
        
                // Scroll until "Create Your Notes" is visible
                const createNotes = await $(
                    'android=new UiScrollable(new UiSelector().scrollable(true))' +
                    '.scrollIntoView(new UiSelector().descriptionContains("Create Your Notes"))'
                );
        
                await createNotes.waitForDisplayed({ timeout: 10000 });
        
                // Screenshot before click
                await browser.saveScreenshot('./screenshots/create_notes_found.png');
        
                // Click Create Your Notes
                await createNotes.click();
                //         await browser.pause(2000);
                // await this.floatingAdd.click();
                //         await browser.pause(2000);
                // await this.floatingAddParagraph.click();


        await browser.pause(2000);
    }
}

module.exports = new HomePage();