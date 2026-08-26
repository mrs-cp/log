import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly aboutTile: Locator;
  readonly workTile: Locator;
  readonly techStackTile: Locator;
  readonly linksTile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutTile = page.locator('.yellow');
    this.workTile = page.locator('.blue');
    this.techStackTile = page.locator('.pink');
    this.linksTile = page.locator('.grey');
  }

  async goto(): Promise<void> {
    await this.page.goto('/home');
  }
}
