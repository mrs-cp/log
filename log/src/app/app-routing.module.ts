import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
  {path: 'about', pathMatch: 'full', loadChildren: () => import('src/app/components/about/about.module').then(m => m.AboutModule)},
  {path: 'work', pathMatch: 'full', loadChildren: () => import('src/app/components/work/work.module').then(m => m.WorkModule)},
  {path: 'links', pathMatch: 'full', loadChildren: () => import('src/app/components/links/links.module').then(m => m.LinksModule)},
  {path: 'tech-stack', pathMatch: 'full', loadChildren: () => import('src/app/components/stack/stack.module').then(m => m.StackModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
