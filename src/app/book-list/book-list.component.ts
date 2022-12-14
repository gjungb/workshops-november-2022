import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, startWith, tap, timer } from 'rxjs';
import { BookCardComponent } from '../book-card/book-card.component';
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

  ui$?: Observable<{
    books: Array<Book>;
    ticker: number;
  }>;

  // private subscription = Subscription.EMPTY;

  private readonly destroy$ = new EventEmitter<void>();

  /**
   *
   */
  @ViewChildren(BookCardComponent)
  cards?: QueryList<BookCardComponent>;

  /**
   *
   * @param service
   * @param router
   */
  constructor(
    private readonly service: BookApiService,
    private readonly router: Router
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    const books$ = this.service.getAll().pipe(startWith([]));

    const ticker$ = timer(2000, 3000).pipe(
      startWith(0),
      map((n) => n + 1)
    );

    /**
     * @link {https://rxjs.dev/api/index/function/combineLatest}
     * @link {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
     * @link {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer}
     */
    this.ui$ = combineLatest([books$, ticker$]).pipe(
      map(([books, ticker]) => ({ books, ticker }))
    );

    // ticker$
    //   .pipe(
    //     tap((value) => console.log(value)),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe();

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

  /**
   *
   */
  ngOnDestroy(): void {
    this.destroy$.emit();
    // this.subscription.unsubscribe();
  }

  /**
   * Handle detailClick-Event
   * @param book
   */
  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
    this.router.navigate(['books', 'detail', book.isbn]);
  }

  /**
   *
   */
  debugAll(): void {
    // effect
    this.cards?.forEach((card) => card.toggleDebugMode());
  }
}
