import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Book } from '../model/book';

/**
 * Stateless / Representional
 */
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  /**
   * Das anzuzeigende Buch
   */
  @Input()
  content?: Book;

  /**
   *
   */
  @Output()
  detailClick = new EventEmitter<Book>();

  /**
   *
   */
  readonly customStyle = {
    color: 'red',
  };

  /**
   *
   */
  handleDetailClick(click: MouseEvent): void {
    // effect
    console.log('Clicked', click.clientX);
    this.detailClick.emit(this.content);
  }
}
