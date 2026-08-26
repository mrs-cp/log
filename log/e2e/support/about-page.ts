import { Page } from '@playwright/test';

export class AboutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/about');
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'About', level: 1 });
  }

  get workExperienceSection() {
    return this.page.getByText('Work Experience');
  }

  get educationSection() {
    return this.page.getByText('Education');
  }

  get homeBreadcrumbLink() {
    return this.page.getByRole('link', { name: 'Home' });
  }
}
