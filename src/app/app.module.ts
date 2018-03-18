import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServerComponent } from './server/server.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServerComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
