import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import * as ISBN from 'isbn3';

@Pipe({
  name: 'appIsbn',
})
export class AppIsbnPipe implements PipeTransform {
  /**
   *
   * @param value
   * @returns
   */
  transform(value: string): string {
    return ISBN.asIsbn13(value, true);
  }
}
