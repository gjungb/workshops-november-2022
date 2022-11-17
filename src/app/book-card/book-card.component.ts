import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
   * Soll das Buch zu Debugging-Zwecken als JSON dargestellt werden
   */
  @Input()
  debug = false;

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
   * @param cdr
   */
  constructor(private readonly cdr: ChangeDetectorRef) {}

  /**
   *
   */
  handleDetailClick(click: MouseEvent): void {
    // effect
    console.log('Clicked', click.clientX);
    this.detailClick.emit(this.content);
  }

  /**
   *
   */
  toggleDebugMode(): void {
    this.debug = !this.debug;
    // Da wir ChangeDetectionStrategy.OnPush verwenden, muss hier Angular ausdrücklich aufgefordert werden, das UI zu aktualiseren :-(
    this.cdr.markForCheck();
  }
}
