import { test as base } from "@playwright/test"
import LoginPage from "../Pages/LoginPage"
import DashBoardPage from "../Pages/DashBoardPage"

// test.describe.configure({ mode: 'parallel' });


exports.test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.openApplication();
        await use(loginPage)
        await loginPage.close();
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashBoardPage(page))
    },

})

exports.expect = base.expect;