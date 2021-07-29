import { test, expect } from '@playwright/test';

test('should work', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.click('a:visible:has-text("Docs")');
  expect(page.url()).toBe('https://playwright.dev/docs/intro');
});