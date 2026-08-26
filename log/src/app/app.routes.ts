import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'about', pathMatch: 'full', loadChildren: () => import('./components/about/about.routes').then(m => m.ABOUT_ROUTES) },
  { path: 'work', pathMatch: 'full', loadChildren: () => import('./components/work/work.routes').then(m => m.WORK_ROUTES) },
  { path: 'links', pathMatch: 'full', loadChildren: () => import('./components/links/links.routes').then(m => m.LINKS_ROUTES) },
  { path: 'tech-stack', pathMatch: 'full', loadChildren: () => import('./components/stack/stack.routes').then(m => m.STACK_ROUTES) },
];
