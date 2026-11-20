import PlayWrightControls from '../Helpers/PlayWrightControls';
import { testConfig } from '../config/test.config';

class LoginPage extends PlayWrightControls {

    homepageElement = {
        emailFeild: `//input[@id="email"]`,
        passwordField: `//input[@id="password"]`,
        login: `//button[@type="submit"]`,
        selectcheckbox: `//input[@type="checkbox"]`,
        selectenglang:`//span[@class='flag-name' and normalize-space(text())='en']`,
    }
    constructor(page) {
        super(page)
        if (!page) {
            throw new Error('Playwright driver is not configured');
        }
        this.page = page;

    }

    async openApplication() {
        await this.page.goto(testConfig.app.baseURL);
    }

    async fillEmail(emailID) {
        console.log('entering email: ' + emailID);
        await this.fillText(this.homepageElement.emailFeild, emailID);
    }

    async fillPassword(password) {
        console.log('entering password: ' + password);
        await this.fillText(this.homepageElement.passwordField, password);
    }

    async clickLogin() {
        console.log('clicking on login');
        await this.singleClick(this.homepageElement.login);
    }
    async clickCheckbox() {
        console.log('clicking on checkbox');
        await this.singleClick(this.homepageElement.selectcheckbox);
    }


    async loginWithUserName(username, password) {
        await this.page.waitForLoadState("networkidle");
         await this.page.waitForLoadState("domcontentloaded");
        await this.fillEmail(username);
        await this.fillPassword(password);
        await this.clickCheckbox();
        await this.clickLogin();
    } 
}

export default LoginPage;