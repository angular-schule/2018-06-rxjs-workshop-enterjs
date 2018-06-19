import { simpleTimer$ } from './data/simple-timer';

// Variante A
/*
simpleTimer$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('complete!')
);*/

// Variante B -- mit Observer-Object
let observer = {
  next: x => console.log(x),
  error: error => console.error(error),
  complete: () => console.info('complete!')
}

simpleTimer$.subscribe(observer)

