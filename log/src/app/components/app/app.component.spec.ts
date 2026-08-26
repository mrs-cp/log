import { render } from '@testing-library/angular';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(AppComponent, {
      providers: [provideRouter([])],
    });
    return { renderResult };
  }

  it('creates the app', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it(`has 'log' as the title`, async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance.title).toEqual('log');
  });

  it('renders a router-outlet', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.container.querySelector('router-outlet')).toBeInTheDocument();
  });
});
