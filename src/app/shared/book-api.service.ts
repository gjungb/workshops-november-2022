import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly client: HttpClient) {}

  /**
   *
   */
  getAll(): Observable<Array<Book>> {
    return this.client
      .get<Array<Book>>('http://localhost:4730/books')
      .pipe(delay(5000));
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
