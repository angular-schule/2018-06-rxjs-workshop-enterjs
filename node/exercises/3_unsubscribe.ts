import { simpleTimer$ } from './data/simple-timer';
import { Subscription } from 'rxjs';

const subscription: Subscription = simpleTimer$.subscribe(
  e => console.log(e),
  e => console.error(e),
  () => console.info('Complete')
);

/******************************/

// TODO: Unsubscribe after timeout
setTimeout(() => {
  subscription.unsubscribe();

  simpleTimer$.subscribe(
    e => console.log('S2:', e)
  );


}, 3000);
