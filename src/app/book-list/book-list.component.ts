import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap, timer } from 'rxjs';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

/**
 * Stateful Component
 */
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books!: Array<Book>;

  private subscription = Subscription.EMPTY;

  constructor(private readonly service: BookApiService) {}

  ngOnInit(): void {
    const ticker$ = timer(2000, 3000);

    this.subscription = ticker$
      .pipe(tap((value) => console.log(value)))
      .subscribe();

    this.service
      .getAll()
      .pipe(tap((value) => console.log(value)))
      .subscribe({
        next: (value) => {
          this.books = value;
        },
        complete: () => console.log('Habe fertig'), // effect
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // handling detailClick-Event
  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
