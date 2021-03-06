import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
  styles: []
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    /******************************/

    fromEvent(window, 'resize').pipe(
      map((e: any) => e.currentTarget.innerWidth),
      startWith(window.innerWidth),
      debounceTime(1000)
    )
    .subscribe(width => this.currentWidth = width);


    /******************************/
  }

}
