const { test, expect } = require('@playwright/test');

class PlaywrightControls {

    constructor(page) {
        if (!page) {
            throw new Error('Playwright driver is not configured');
        }
        this.page = page;
    }

    async singleClick(locatorValue) {
        const ele = await this.page.locator(locatorValue);
        await ele.click({ timeout: 60000 });
    }

    async checkElementIsVisible(locatorValue) {
        await this.page.waitForLoadState("load")
        const ele = await this.page.locator(locatorValue);
        return await ele.isVisible();

    }

    async fillText(locatorValue, valueToFill) {
        const ele = await this.page.locator(locatorValue);
        await ele.fill(valueToFill);
    }

    async imageUpload(locatorValue, filePath) {
        const ele = await this.page.locator(locatorValue);
        await ele.setInputFiles(filePath)
    }

    async checkIfElementIsVisibleByText(text) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async takeScreenshot(path) {
        await this.page.screenshot({ path });
    }

    async close() {
        await this.page.close();
    }

    async waitForURLtoChange() {
        await this.page.wai
    }

    async waitForLoaderToDisappear() {
        const ele = await this.page.locator("//div[contains(@class,'loader')]");
        await ele.waitFor({ state: 'hidden' })
    }
}

module.exports = PlaywrightControls;