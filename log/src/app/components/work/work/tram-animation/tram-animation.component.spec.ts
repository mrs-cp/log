import { render, screen } from '@testing-library/angular';
import { TramAnimationComponent } from './tram-animation.component';

describe(TramAnimationComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(TramAnimationComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Tram Animation heading and preview image', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Tram Animation' })).toBeInTheDocument();
    expect(screen.getByText('- Animated with anime.js -')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'tram animation' })).toBeInTheDocument();
  });

  it('embeds the CodePen demo', async () => {
    await renderComponent();
    expect(screen.getByTitle('tram animation with animejs')).toBeInTheDocument();
  });
});
