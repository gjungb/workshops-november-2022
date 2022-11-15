import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { AppIsbnPipe } from './shared/app-isbn.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [AppComponent, BookCardComponent, BookListComponent, AppIsbnPipe, BookDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
