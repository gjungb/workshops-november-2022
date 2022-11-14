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
}
