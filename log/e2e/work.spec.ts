import { test, expect } from './support/fixtures';

test.describe('Work/Animations page', () => {
  test.beforeEach(async ({ workPage }) => {
    await workPage.goto();
  });

  test('shows the Work/Animations breadcrumb', async ({ workPage }) => {
    await expect(workPage.breadcrumbCurrentPage).toBeVisible();
  });

  test('shows all four animation demos', async ({ workPage }) => {
    await expect(workPage.animationHeading('Good Night')).toBeVisible();
    await expect(workPage.animationHeading('Colour Blend')).toBeVisible();
    await expect(workPage.animationHeading('Tram Animation')).toBeVisible();
    await expect(workPage.animationHeading('Leipzig Tram Network')).toBeVisible();
  });
});
