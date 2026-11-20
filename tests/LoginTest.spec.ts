
import { test, expect } from '../Helpers/fixtures';
import { testConfig } from '../config/test.config';

test.describe('Login Tests with Different Users', () => {
  for (const data of testConfig.users) {
    test(`Login and dashboard check for ${data.username}`, async ({  loginPage, dashboardPage }) => {
      test.setTimeout(testConfig.testTimeout);

      await loginPage.loginWithUserName(data.username, data.password);
     const bool = await dashboardPage.verifyDashboardPage();
     expect(bool).toBeTruthy();
      
    });
    
  }
});
