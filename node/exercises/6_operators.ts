import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// OHNE RXJS! mit purem JS
const result = dataArray
  .map(e => e + 10)
  .filter(e => e % 2 === 0)
  .reduce((acc, item) => acc + item, 0)

console.log(result);

from(dataArray).pipe(
  map(e => e + 10),
  // ANTIPATTERN - globaler State!!!
  // filter(e => new Date().getFullYear() == 2018),
  filter(e => e % 2 === 0),
  reduce((acc, item) => acc + item, 0)

).subscribe(e => console.log('Observable:', e));
