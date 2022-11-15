import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take, takeUntil, tap, timer } from 'rxjs';
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
  // books!: Array<Book>;

  books$?: Observable<Array<Book>>;

  // private subscription = Subscription.EMPTY;

  private readonly destroy$ = new EventEmitter<void>();

  constructor(private readonly service: BookApiService) {}

  ngOnInit(): void {
    const ticker$ = timer(2000, 3000);

    ticker$
      .pipe(
        tap((value) => console.log(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.books$ = this.service.getAll().pipe(
      tap({
        next: (value) => console.log(value),
        complete: () => console.log('Habe fertig'), // effect
      })
    );

    // this.service
    //   .getAll()
    //   .pipe(
    //     tap((value) => console.log(value)),
    //     take(1)
    //   )
    //   .subscribe({
    //     next: (value) => {
    //       this.books = value;
    //     },
    //     complete: () => console.log('Habe fertig'), // effect
    //   });
  }

  ngOnDestroy(): void {
    this.destroy$.emit();
    // this.subscription.unsubscribe();
  }

  // handling detailClick-Event
  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
