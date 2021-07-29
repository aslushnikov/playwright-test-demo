import { test, expect } from '@playwright/test';

test('should work', async ({ page, isMobile }) => {
  await page.goto('https://playwright.dev');
  if (isMobile)
    await page.click('[aria-label="Navigation bar toggle"]');
  await page.click('a:visible:has-text("Docs")');
  expect(page.url()).toBe('https://playwright.dev/docs/intro');
});
