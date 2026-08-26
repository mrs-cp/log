import { test as base } from '@playwright/test';
import { HomePage } from './home-page';
import { AboutPage } from './about-page';
import { LinksPage } from './links-page';
import { StackPage } from './stack-page';
import { WorkPage } from './work-page';

type Fixtures = {
  homePage: HomePage;
  aboutPage: AboutPage;
  linksPage: LinksPage;
  stackPage: StackPage;
  workPage: WorkPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },
  linksPage: async ({ page }, use) => {
    await use(new LinksPage(page));
  },
  stackPage: async ({ page }, use) => {
    await use(new StackPage(page));
  },
  workPage: async ({ page }, use) => {
    await use(new WorkPage(page));
  },
});

export { expect } from '@playwright/test';
