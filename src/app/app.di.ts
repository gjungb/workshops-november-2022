import { InjectionToken } from '@angular/core';

/**
 * @link {https://angular.io/guide/dependency-injection-providers#using-an-injectiontoken-object}
 */
export const BASE_URL = new InjectionToken<string>(
  'The Base Url of the REST API'
);
