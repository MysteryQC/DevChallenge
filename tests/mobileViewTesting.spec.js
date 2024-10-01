const { test, expect, devices } = require('@playwright/test');
const Locators = require('../patterns/locators')
const {  galaxyS21 } = require('../patterns/logic')




test.use(galaxyS21); 
    test('Case #003 - No mobile partners', async ({ page }) => {
      const locators = new Locators(page);
      
      
      await page.goto('/');
      await locators.hamburgerMenu.click();
      await locators.partnersPage.click();

      //Isn't defined in which category ("Організатори", "За сприяння" or "Інформаційні партнери") "Apple Inc" partner shouldn't be, so we look at the entire page
      const appleIncVisible = await page.isVisible('text=Apple Inc');   
      expect(appleIncVisible).toBe(false);
    
      const userAgent = await page.evaluate(() => navigator.userAgent);      
      console.log(`User-Agent: ${userAgent}`);
      expect(userAgent).toContain('Mobile');      
    });