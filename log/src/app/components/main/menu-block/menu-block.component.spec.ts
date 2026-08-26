import { Component } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { MenuBlockComponent } from './menu-block.component';

@Component({ selector: 'log-dummy', template: '', standalone: true })
class DummyComponent {}

describe(MenuBlockComponent.name, () => {
  async function renderComponent() {
    const renderResult = await render(MenuBlockComponent, {
      providers: [
        provideRouter([
          { path: 'about', component: DummyComponent },
          { path: 'work', component: DummyComponent },
          { path: 'tech-stack', component: DummyComponent },
          { path: 'links', component: DummyComponent },
        ]),
      ],
    });
    return { renderResult };
  }

  it('creates', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it('renders one navigation tile per icon', async () => {
    const { renderResult } = await renderComponent();
    expect(renderResult.container.querySelector('.fa-circle-user')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.fa-palette')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.fa-list')).toBeInTheDocument();
    expect(renderResult.container.querySelector('.fa-link')).toBeInTheDocument();
  });

  it('navigates to /about when the yellow tile is clicked', async () => {
    const { renderResult } = await renderComponent();
    const router = renderResult.fixture.debugElement.injector.get(Router);
    const yellowTile = renderResult.container.querySelector('.yellow') as HTMLElement;

    await userEvent.click(yellowTile);

    expect(router.url).toBe('/about');
  });

  it('navigates to /links when the grey tile is clicked', async () => {
    const { renderResult } = await renderComponent();
    const router = renderResult.fixture.debugElement.injector.get(Router);
    const greyTile = renderResult.container.querySelector('.grey') as HTMLElement;

    await userEvent.click(greyTile);

    expect(router.url).toBe('/links');
  });
});
