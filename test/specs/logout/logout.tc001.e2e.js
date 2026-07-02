const ProfilePage = require('../../../pages/ProfilePage');

describe('LOGOUT_001', () => {

    it('Verify offline entry popup appears', async () => {

        await ProfilePage.clickLogout();

        const title = await ProfilePage.getDialogMessage();
        const message = await ProfilePage.getDialogMessage();



        await expect(title).toContain('Unsynced');

        await expect(message)
            .toContain('Sync');
    });

});

// describe('LOGOUT_002', () => {
//     it('Verify Sync & Logout and Logout buttons', async () => {



//         const syncBtn = $('//*[contains(@content-desc,"Sync & Logout")]');
//         const logoutBtn = $('//*[contains(@content-desc,"Logout")]')

//         await expect(syncBtn).toBeDisplayed();
//         await expect(logoutBtn).toBeDisplayed();

//     });
// })
// describe('LOGOUT_003', () => {
//     it('Verify sync completes successfully', async () => {

//         await ProfilePage.clickLogout();

//         await $('//*[contains(@content-desc,"Sync & Logout")]').click();

//         const syncSuccess =
//             $('//*[contains(@text,"Sync completed")]');

//         await syncSuccess.waitForDisplayed({
//             timeout: 120000
//         });

//     });
// })
// describe('LOGOUT_004', () => {
//     it('Verify user remains logged in', async () => {

//         const profileHeader =
//             $('//*[contains(@content-desc,"Profile")]');
//         //      const source = await driver.getPageSource();
//         // console.log(source);

//         await profileHeader.waitForDisplayed();

//         await expect(profileHeader).toBeDisplayed();

//     });
// })
// describe('LOGOUT_005', () => {

//     it('Verify standard logout popup after sync', async () => {

//         await ProfilePage.clickLogout();

//         const msg = await ProfilePage.getDialogMessageLogout();

//         await expect(msg)
//             .toContain('logout');

//     });
// })
// describe('LOGOUT_006', () => {
//     const LoginPage = require('../../../pages/LoginPage');

//     it('Verify direct logout', async () => {

//         await ProfilePage.clickLogout();

//         await $('//*[@text="Logout"]').click();

//         await expect(
//             await LoginPage.isDisplayed()
//         ).toBe(true);

//     });
// })
// describe('LOGOUT_007', () => {
//     it('Verify confirmation popup when no offline entries', async () => {

//         await ProfilePage.clickLogout();

//         const msg = await ProfilePage.getMessage();

//         await expect(msg)
//             .toContain('logout');

//     });
// })
// describe('LOGOUT_008', () => {

//     it('Verify cancel logout', async () => {

//         await ProfilePage.clickLogout();

//         await $('//*[@text="Cancel"]').click();

//         const profile =
//             $('//*[@text="Profile"]');

//         await expect(profile).toBeDisplayed();

//     });
// })
// describe('LOGOUT_009', () => {
//     it('Verify successful logout', async () => {

//         await ProfilePage.clickLogout();

//         await $('//*[@text="Yes"]').click();

//         const loginBtn =
//             $('//*[@text="Login"]');

//         await loginBtn.waitForDisplayed({
//             timeout: 30000
//         });

//         await expect(loginBtn).toBeDisplayed();

//     });
// })
// describe('LOGOUT_010', () => {
//     it('Verify protected screen inaccessible', async () => {

//         await driver.back();

//         const loginBtn =
//             $('//*[@text="Login"]');

//         await expect(loginBtn).toBeDisplayed();

//     });
// })
// describe('LOGOUT_011', () => {
//     it('Verify user cannot return after logout', async () => {

//         await driver.back();

//         await driver.pause(2000);

//         const loginBtn =
//             $('//*[@text="Login"]');

//         await expect(loginBtn).toBeDisplayed();

//     });
// })
// describe('LOGOUT_012', () => {
//     it('Verify only one popup appears', async () => {

//         for (let i = 0; i < 5; i++) {
//             await ProfilePage.clickLogout();
//         }

//         const popups =
//             await $$('//*[@resource-id="dialogTitle"]');

//         expect(popups.length).toBe(1);

//     });
// })
// describe('LOGOUT_013', () => {
//     it('Verify duplicate sync not triggered', async () => {

//         await ProfilePage.clickLogout();

//         const syncBtn =
//             $('//*[@text="Sync & Logout"]');

//         await syncBtn.click();

//         await syncBtn.click();

//         await syncBtn.click();

//         const loader =
//             $('//*[contains(@text,"Syncing")]');

//         await expect(loader).toBeDisplayed();

//     }); Í
// })
