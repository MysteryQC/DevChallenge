class Locators {

    constructor(page) {
        this.page = page
        this.hamburgerMenu = page.locator('//body/div[@id="Top"]/div[2]/div[11]/div[2]/div[1]/div[1]/div[1]');
        this.aboutPage = page.locator('//body/div[@id="Top"]/div[2]/div[11]/div[1]/div[4]/div[1]/div[1]/div[1]/a[2]');
        this.contactEmail = page.locator('text=hello@devchallenge.it');
        this.judgedsPage = page.locator('//body/div[@id="Top"]/div[2]/div[11]/div[1]/div[4]/div[1]/div[1]/div[1]/a[3]');
        this.partnersPage = page.locator('//body/div[@id="Top"]/div[2]/div[11]/div[1]/div[4]/div[1]/div[1]/div[2]/a[4]');
               
    }

}

module.exports = Locators;