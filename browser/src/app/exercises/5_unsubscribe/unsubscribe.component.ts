import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { ExerciseService } from '../exercise.service';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styles: []
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();
  constructor(private es: ExerciseService) { }

  /*******************************/

  // sub: Subscription;
  alive = true;

  /*******************************/
  ngOnInit() {
    const interval$ = timer(0, 1000);

    // this.sub =
    interval$.pipe(
      takeWhile(() => this.alive)
    ).subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED :-)')
    );
  }

  destroy() {
    /*******************************/

    // this.sub.unsubscribe();
    this.alive = false;

    /*******************************/

    this.logStream$.next('DESTROY');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }

  ngOnDestroy() {
    this.destroy();
  }

}
