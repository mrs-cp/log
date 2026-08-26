import { test, expect } from './support/fixtures';

test.describe('Navigation from the home page', () => {
  test('clicking the About tile navigates to /about', async ({ page, homePage, aboutPage }) => {
    await test.step('Given the user is on the home page', async () => {
      await homePage.goto();
    });

    await test.step('When the user clicks the About tile', async () => {
      await homePage.aboutTile.click();
    });

    await test.step('Then the About page is shown', async () => {
      await expect(page).toHaveURL(/\/about$/);
      await expect(aboutPage.heading).toBeVisible();
    });
  });

  test('clicking the Work tile navigates to /work', async ({ page, homePage, workPage }) => {
    await homePage.goto();

    await homePage.workTile.click();

    await expect(page).toHaveURL(/\/work$/);
    await expect(workPage.animationHeading('Good Night')).toBeVisible();
  });

  test('clicking the tech-stack tile navigates to /tech-stack', async ({
    page,
    homePage,
    stackPage,
  }) => {
    await homePage.goto();

    await homePage.techStackTile.click();

    await expect(page).toHaveURL(/\/tech-stack$/);
    await expect(stackPage.heading).toBeVisible();
  });

  test('clicking the Links tile navigates to /links', async ({ page, homePage, linksPage }) => {
    await homePage.goto();

    await homePage.linksTile.click();

    await expect(page).toHaveURL(/\/links$/);
    await expect(linksPage.heading).toBeVisible();
  });
});
