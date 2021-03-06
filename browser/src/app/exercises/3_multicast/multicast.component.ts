import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { MeasureValuesService } from './measure-values.service';
import { share, tap } from 'rxjs/operators';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
  styles: []
})
export class MulticastComponent implements OnInit {

  /*******************************/
  measureValues$: Subject<number>;
  /*******************************/

  listeners = [];
  logStream$ = new Subject();

  constructor(private mvs: MeasureValuesService) { }

  ngOnInit() {

    /*******************************/

    // jeder bekommt seine eigenen Zufallszahlen
    // this.measureValues$ = this.mvs.getValues();

    // wir teilen uns die Daten
    // this.measureValues$ = this.mvs.getValues().pipe(share());

    this.measureValues$ = new ReplaySubject<number>(1);
    this.mvs.getValues()
      .pipe(
        tap(e => console.log('LEAK!!', e))
      )
      .subscribe(this.measureValues$);



    /*******************************/
  }

  addListener() {
    this.listeners.push(this.mvs.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.mvs.generateRandomString(5);
    // this.measureValues$.subscribe(e => console.log(randomString, e));
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
