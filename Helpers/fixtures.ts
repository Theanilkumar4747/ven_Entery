import { test as base, expect as baseExpect } from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import DashBoardPage from "../Pages/DashBoardPage";

// Define the custom fixtures' types
type CustomFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashBoardPage;
};

// Extend the base test with custom fixtures
export const test = base.extend<CustomFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await use(loginPage);
    await loginPage.close();
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashBoardPage(page);
    await use(dashboardPage);
  },
});

export const expect = baseExpect;
