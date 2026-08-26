import { render, screen } from '@testing-library/angular';
import { CatAnimationComponent } from './cat-animation.component';

describe(CatAnimationComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(CatAnimationComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Good Night heading and preview image', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Good Night' })).toBeInTheDocument();
    expect(screen.getByText('- Wide-Screen Pure CSS Animation -')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'good night animation' })).toBeInTheDocument();
  });

  it('embeds the CodePen demo', async () => {
    await renderComponent();
    expect(screen.getByTitle('Good Night Cat CSS Drawing & Animation')).toBeInTheDocument();
  });
});
