class ScrollUtil {

    static async scrollDown() {

        const rect = await driver.getWindowRect();

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: rect.width / 2,
                        y: rect.height * 0.80
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    },
                    {
                        type: 'pause',
                        duration: 500
                    },
                    {
                        type: 'pointerMove',
                        duration: 1000,
                        x: rect.width / 2,
                        y: rect.height * 0.30
                    },
                    {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            }
        ]);

        await browser.pause(1500);
    }

    static async scrollToText(text) {

        for (let i = 0; i < 8; i++) {

            const elements = await $$(
                `//*[contains(@text,"${text}")]`
            );

            if (elements.length > 0) {
                return elements[0];
            }

            await this.scrollDown();
        }

        throw new Error(`${text} not found`);
    }
}

module.exports = ScrollUtil;