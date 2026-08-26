import { render, screen } from '@testing-library/angular';
import { LinksComponent } from './links.component';

describe(LinksComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(LinksComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Links heading', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument();
  });

  it('renders a GitHub link that opens in a new tab', async () => {
    await renderComponent();
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mrs-cp');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders links to CodePen and Twitter', async () => {
    await renderComponent();
    expect(screen.getByRole('link', { name: 'CodePen' })).toHaveAttribute(
      'href',
      'https://codepen.io/mrs-cp',
    );
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/mrscp_',
    );
  });
});
