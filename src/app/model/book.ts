/**
 * Ein Buch
 */
export interface Book {
  /**
   * Der Title
   */
  title: string;
  /**
   * Die Person, die das Buch geschrieben hat
   * @example Herman Melville
   */
  author: string;
  /**
   * Eine kurze Zusammenfassung
   */
  abstract?: string;
}
