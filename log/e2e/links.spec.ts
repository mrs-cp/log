import { test, expect } from './support/fixtures';

test.describe('Links page', () => {
  test.beforeEach(async ({ linksPage }) => {
    await linksPage.goto();
  });

  test('shows the Links heading', async ({ linksPage }) => {
    await expect(linksPage.heading).toBeVisible();
  });

  test('links to GitHub, CodePen, and Twitter open in a new tab', async ({ linksPage }) => {
    await expect(linksPage.linkFor('GitHub')).toHaveAttribute(
      'href',
      'https://github.com/mrs-cp',
    );
    await expect(linksPage.linkFor('GitHub')).toHaveAttribute('target', '_blank');

    await expect(linksPage.linkFor('CodePen')).toHaveAttribute(
      'href',
      'https://codepen.io/mrs-cp',
    );
    await expect(linksPage.linkFor('CodePen')).toHaveAttribute('target', '_blank');

    await expect(linksPage.linkFor('Twitter')).toHaveAttribute(
      'href',
      'https://twitter.com/mrscp_',
    );
    await expect(linksPage.linkFor('Twitter')).toHaveAttribute('target', '_blank');
  });
});
