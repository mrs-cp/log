import { render } from '@testing-library/angular';
import { provideRouter } from '@angular/router';
import { MainComponent } from './main.component';

describe(MainComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(MainComponent, {
      providers: [provideRouter([])],
    });
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders the menu block with all four navigation tiles', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.container.querySelector('log-menu-block')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.yellow')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.blue')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.pink')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.grey')).toBeInTheDocument();
  });
});
