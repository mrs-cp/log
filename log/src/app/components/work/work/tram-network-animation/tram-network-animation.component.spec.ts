import { render, screen } from '@testing-library/angular';
import { TramNetworkAnimationComponent } from './tram-network-animation.component';

describe(TramNetworkAnimationComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(TramNetworkAnimationComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Leipzig Tram Network heading and preview image', async () => {
    await renderComponent();
    expect(
      screen.getByRole('heading', { name: 'Leipzig Tram Network' }),
    ).toBeInTheDocument();
    expect(screen.getByText('- Animated with anime.js -')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'leipzig tram network' })).toBeInTheDocument();
  });

  it('embeds the CodePen demo', async () => {
    await renderComponent();
    expect(
      screen.getByTitle('Animated Leipzig Tram Network Map - AnimeJs'),
    ).toBeInTheDocument();
  });
});
