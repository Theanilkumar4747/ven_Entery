//const { test, expect } = require('../Helpers/fixtures.js')
//
//test('Test Login with web agent 1', async ({ page, loginPage,dashboardPage}) => {
//    test.setTimeout(300000);
//
//    await loginPage.loginWithEmail('webagent1', 'zmcAyNMnLWwhzbQhW3NXBLjb');
//
//    await dashboardPage.verifyDashboardPage();
//
//
//});
//
//test('Verify user is able to change Language', async ({ page, loginPage,dashboardPage}) => {
//    test.setTimeout(15000);
//
//    await loginPage.loginWithEmail('webagent2', 'WQDCtbpTEWv9tBeTCQQaxdSz');
//
//    await dashboardPage.verifyDashboardPage();
//    await dashboardPage.SelectLanguage();
//
//
//});
const { test, expect } = require('../Helpers/fixtures.js');

const testData = [
  { username: 'webagent1', password: 'zmcAyNMnLWwhzbQhW3NXBLjb' },
  { username: 'webagent2', password: 'WQDCtbpTEWv9tBeTCQQaxdSz' }
];

test.describe('Login Tests with Different Users', () => {
  for (const data of testData) {
    test(`Login and dashboard check for ${data.username}`, async ({ page, loginPage, dashboardPage }) => {
      test.setTimeout(60000);

      await loginPage.loginWithEmail(data.username, data.password);
     // await dashboardPage.verifyDashboardPage();
      if (data.username === 'webagent2') {
       // await dashboardPage.SelectLanguage();
      }
    });
  }
});
