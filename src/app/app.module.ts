import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BASE_URL } from './app.di';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [AppComponent, BookCardComponent, BookListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'http://localhost:4730',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
