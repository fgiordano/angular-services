import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-second-counter',
  templateUrl: './my-second-counter.component.html',
  styleUrls: ['./my-second-counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MySecondCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
