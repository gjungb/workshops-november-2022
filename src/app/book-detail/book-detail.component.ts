import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  /**
   *
   */
  book$?: Observable<Book>;

  /**
   * Die Instanz der @link {BookCardComponent}
   */
  @ViewChild(BookCardComponent)
  card?: BookCardComponent;

  /**
   *
   * @param route
   * @param api
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: BookApiService
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    this.book$ = this.api.getBookByIsbn(isbn as string);
  }

  /**
   *
   */
  ngAfterViewInit(): void {
    console.log(this.card);
  }

  /**
   *
   */
  ngAfterViewChecked(): void {
    console.log(this.card);
  }

  /**
   *
   */
  debug(): void {
    // effect
    this.card?.toggleDebugMode();
  }
}
