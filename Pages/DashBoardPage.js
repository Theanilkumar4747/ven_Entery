const PlayWrightControls = require('../Helpers/PlayWrightControls');

class DashBoardPage extends PlayWrightControls {

    DashBoardPageElement = {

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

    async clickCountryflag() {
        console.log('clicking on Country flag Image');
        await this.singleClick(this.DashBoardPageElement.selectLang);
    }

//    async Selectlanguage() {
//        await this.clickItemTypeButton(this.DashBoardPageElement.selectenglang);
//    }

     async selectLanguage(){
     console.log ('Select Language');
     await this.singleClick(this.DashBoardPageElement.selectenglang)
   }

    async verifyDashboardPage() {
        console.log('Verifying user is on Dashboard page');
        await this.page.waitForURL("https://webagent-silicon.alfavox.dev/home/contents/dashboards#-", { waitUntil: 'load' });
    }

//     async SelectLanguage() {
//             await this.clickCountryflag;
//             await this.selectLang;
//
//         }


}

module.exports = DashBoardPage;