import { render, screen } from '@testing-library/angular';
import { WorkComponent } from './work.component';

describe(WorkComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(WorkComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the breadcrumb for the Work/Animations page', async () => {
    await renderComponent();
    expect(screen.getByText('Work/Animations')).toBeInTheDocument();
  });

  it('renders all four animation demos', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Good Night' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Colour Blend' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tram Animation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Leipzig Tram Network' })).toBeInTheDocument();
  });
});
