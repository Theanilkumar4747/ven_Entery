import PlayWrightControls from '../Helpers/PlayWrightControls';
import { testConfig } from '../config/test.config';

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
      await this.page.waitForURL(testConfig.app.dashboardURL, { waitUntil: 'load' });
        await this.page.waitForSelector(this.DashBoardPageElement.selectLang);
        await this.singleClick(this.DashBoardPageElement.selectLang);
    }

     async selectLanguage(){
     console.log ('Select Language');
     await this.singleClick(this.DashBoardPageElement.selectenglang)
     }

    async verifyDashboardPage():Promise<boolean> {
        console.log('Verifying user is on Dashboard page');
        await this.page.waitForLoadState("networkidle")
        await this.page.waitForURL(testConfig.app.dashboardURL, { waitUntil: 'load' });
        return true;
    }



}

export default DashBoardPage;