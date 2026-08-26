import { render, screen } from '@testing-library/angular';
import { HoudiniAnimationComponent } from './houdini-animation.component';

describe(HoudiniAnimationComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(HoudiniAnimationComponent);
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the Colour Blend heading and preview image', async () => {
    await renderComponent();
    expect(screen.getByRole('heading', { name: 'Colour Blend' })).toBeInTheDocument();
    expect(screen.getByText('- Animation with CSS-Houdini -')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'houdini animation' })).toBeInTheDocument();
  });

  it('embeds the CodePen demo', async () => {
    await renderComponent();
    expect(screen.getByTitle('CSS Coudini Colour Blend Animation')).toBeInTheDocument();
  });
});
