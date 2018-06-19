import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  logStream$ = new Subject<string>();

  constructor() { }

  addName(name: string) {
    return map(msg => name + ': ' + msg);
  }

  ngOnInit() {
    forkJoin(this.msg.julia$.pipe(this.addName('Julia')),
          this.msg.georg$.pipe(this.addName('Georg')),
          this.msg.john$.pipe(this.addName('John'))
    )
    .subscribe(
      msg => this.logStream$.next(msg.toString()),
      error => {},
      () => this.logStream$.next('All members have left!')
    );
  }

}
