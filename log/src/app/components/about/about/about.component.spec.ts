import { render, screen } from '@testing-library/angular';
import { AboutComponent } from './about.component';

describe(AboutComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(AboutComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the About heading and breadcrumb', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders the Work Experience and Education sections', async () => {
    await renderComponent();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('lists the current job', async () => {
    await renderComponent();
    expect(screen.getByText('Software Developer (Angular)')).toBeInTheDocument();
    expect(screen.getByText('- BVV, Berlin')).toBeInTheDocument();
  });
});
