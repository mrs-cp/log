import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {MenuBlockComponent} from "./components/main/menu-block/menu-block.component";
import { MainComponent } from './components/main/main.component';
import { LinksComponent } from './components/links/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBlockComponent,
    MainComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
