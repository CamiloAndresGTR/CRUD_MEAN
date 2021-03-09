import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateElementComponent } from './components/create-element/create-element.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateElementComponent,
    ListElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
