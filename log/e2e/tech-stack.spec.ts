import { test, expect } from './support/fixtures';

test.describe('Techstack/Skills page', () => {
  test.beforeEach(async ({ stackPage }) => {
    await stackPage.goto();
  });

  test('shows the Techstack/Skills heading', async ({ stackPage }) => {
    await expect(stackPage.heading).toBeVisible();
  });

  test('lists technical and language skills', async ({ stackPage }) => {
    await expect(stackPage.skillRow('TypeScript')).toBeVisible();
    await expect(stackPage.skillRow('Angular')).toBeVisible();
    await expect(stackPage.skillRow('English')).toBeVisible();
    await expect(stackPage.skillRow('Japanese')).toBeVisible();
  });

  test('gives TypeScript a full five-star rating', async ({ stackPage }) => {
    const filledStars = stackPage.skillRow('TypeScript').locator('.text-bs-success');

    await expect(filledStars).toHaveCount(5);
  });
});
