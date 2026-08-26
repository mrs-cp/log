import { Page } from '@playwright/test';

export class LinksPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/links');
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'Links', level: 1 });
  }

  linkFor(name: 'GitHub' | 'CodePen' | 'Twitter') {
    return this.page.getByRole('link', { name });
  }
}
