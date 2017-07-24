import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';

import { AppComponent }        from './app.component';
import { FirstPageComponent }  from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
