import { of, from, timer, interval } from 'rxjs';

of('A', 'B', 'C')
  .subscribe(e => console.log(e));

// Array
from(['A', 'B', 'C']).subscribe(console.log)

// from Promise
const myPromise = Promise.resolve('Daten!');
from(myPromise).subscribe(console.log)

timer(2000).subscribe(x => console.log('Ich bin timer1', x));
timer(0, 1000).subscribe(x => console.log('Ich bin timer2', x));
interval(1000).subscribe(x => console.log('Ich bin interval', x));

