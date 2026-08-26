import { test, expect } from './support/fixtures';

test.describe('About page', () => {
  test.beforeEach(async ({ aboutPage }) => {
    await aboutPage.goto();
  });

  test('shows the About heading and both CV sections', async ({ aboutPage }) => {
    await expect(aboutPage.heading).toBeVisible();
    await expect(aboutPage.workExperienceSection).toBeVisible();
    await expect(aboutPage.educationSection).toBeVisible();
  });

  test('shows a Home breadcrumb link', async ({ aboutPage }) => {
    // Note: this link is currently a plain `href="#"`, not wired to the router
    // (see the breadcrumb markup shared across about/links/stack/work pages) —
    // this test only covers what actually happens today, not intended navigation.
    await expect(aboutPage.homeBreadcrumbLink).toBeVisible();
  });
});
