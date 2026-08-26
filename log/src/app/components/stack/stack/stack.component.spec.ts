import { render, screen } from '@testing-library/angular';
import { StackComponent } from './stack.component';

describe(StackComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(StackComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Techstack/Skills heading', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Techstack/Skills' })).toBeInTheDocument();
  });

  it('lists the technical and language skills', async () => {
    await renderComponent();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Japanese')).toBeInTheDocument();
  });

  it('gives TypeScript a full five-star rating', async () => {
    await renderComponent();
    const skillRow = screen.getByText('TypeScript').closest('li') as HTMLElement;
    const filledStars = skillRow.querySelectorAll('.text-bs-success');
    expect(filledStars).toHaveLength(5);
  });
});
