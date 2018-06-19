import { Observable } from 'rxjs';

/*************************************/

const myObservable$ = new Observable(observer => {
  setTimeout(() => {
    observer.next('TIMEOUT');
    observer.complete();
  }, 2000);
  observer.next('A');
  observer.next('B');
  observer.next('C');

});

/*************************************/

const observer = {
  next: e => console.log(e),
  error: e => console.error('ERROR', e),
  complete: () => console.info('Complete')
};

myObservable$.subscribe(observer);
