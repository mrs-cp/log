import { Page } from '@playwright/test';

export class StackPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/tech-stack');
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'Techstack/Skills', level: 1 });
  }

  skillRow(name: string) {
    return this.page.locator('li').filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }
}
