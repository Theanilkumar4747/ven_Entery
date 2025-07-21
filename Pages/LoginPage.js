const PlayWrightControls = require('../Helpers/PlayWrightControls');

class LoginPage extends PlayWrightControls {

    homepageElement = {
        emailFeild: `//input[@name="username"]`,
        passwordField: `//input[@name='password']`,
        login: `//button[@class="mat-focus-indicator submit-button half-width mat-raised-button mat-button-base ng-star-inserted"]`,
        selectLang: `//div[@class="current-language"]`,
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
        await this.page.goto("https://webagent-silicon.alfavox.dev/");
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

async selectLanguage(){
console.log ('Select Language');
await this.singleClick(this.homepageElement.selectLang)
}

async selectEnglishLanguage(){
console.log ('Select  English Language');
await this.singleClick(this.homepageElement.selectenglang)
}

    async loginWithEmail(emailID, password) {
        await this.fillEmail(emailID);
        await this.fillPassword(password);
        await this.clickLogin();
        await this.selectLanguage();
        await this.selectEnglishLanguage();
    }

}

module.exports = LoginPage;