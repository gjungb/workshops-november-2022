import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { BASE_URL } from '../app.di';
import { Book } from '../model/book';

/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  /**
   *
   * @param client
   * @param URL
   */
  constructor(
    private readonly client: HttpClient,
    @Inject(BASE_URL) private readonly URL: string
  ) {}

  /**
   *
   */
  getAll(): Observable<Array<Book>> {
    return this.client.get<Array<Book>>(`${this.URL}/books`).pipe(delay(5000));
  }

  /**
   *
   * @param isbn
   * @returns
   */
  getBookByIsbn(isbn: string): Observable<Book> {
    // @link {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
    return this.client.get<Book>('http://localhost:4730/books' + '/' + isbn);
  }
}
