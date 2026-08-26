import { Page } from '@playwright/test';

export class WorkPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/work');
  }

  get breadcrumbCurrentPage() {
    return this.page.getByText('Work/Animations');
  }

  animationHeading(
    name: 'Good Night' | 'Colour Blend' | 'Tram Animation' | 'Leipzig Tram Network',
  ) {
    return this.page.getByRole('heading', { name, level: 1 });
  }
}
