import { Component, OnInit, OnDestroy, DoCheck, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy,DoCheck,OnChanges,AfterContentChecked {
 ngOnChanges(changes :SimpleChanges): void {
    console.log("Ng On Changes Method Called ..");
  }
 

  constructor() {
  console.log("COnstructor called ........");
  }
   ngOnInit() {
    console.log("Init methods ");
  }
  ngDoCheck(): void {
    console.log(" Do Check Method Called ...");
  }
  ngAfterContentChecked(): void {
    console.log("no change");
  }
  ngOnDestroy(): void {
    console.log(" DestroyMethod  called ....");
  }
 

}
