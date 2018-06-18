import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
  styles: []
})
export class GameScoreComponent implements OnInit {

  currentScore: number = 0;
  finalScore: number;

  score$ = new Subject<number>();
  logStream$ = new Subject();
  
  constructor() { }

  ngOnInit() {

    /******************************/
    

    
    /******************************/

    this.score$.subscribe(
      value => this.logStream$.next(value),
      err => {},
      () => this.logStream$.next('COMPLETED')
    );
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
