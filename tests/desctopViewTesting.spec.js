const { test, expect } = require('@playwright/test');
const Locators = require('../patterns/locators')
const {JudgeVerification} = require('../patterns/logic')

test('Case #001 - contact email is visible', async ({ page }) => {
  const locators = new Locators(page);
  
  await page.goto('/'); 
  await locators.hamburgerMenu.click();  
  await locators.aboutPage.click();  
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));  
  await expect(locators.contactEmail).toBeVisible();
});


test('Case #002 - Count judges', async ({ page }) => {
  const locators = new Locators(page);
  const logic = new JudgeVerification(page);
  
  await page.goto('/');
  await locators.hamburgerMenu.click();
  await locators.judgedsPage.click()
  await logic.verifyJudges();
});

