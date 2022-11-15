/**
 * Ein Buch
 */
export interface Book {
  /**
   * @link {https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer}
   */
  isbn: string;
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
