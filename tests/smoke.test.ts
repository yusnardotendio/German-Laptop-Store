// tests/smoke.test.ts
import { test, expect } from '@playwright/test';
test('Verify standard layout compiles and renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#root')).toBeVisible();
});
