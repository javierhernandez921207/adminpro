import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: []
})
export class ProgressComponent implements OnInit {

  porciento1: number = 20;
  porciento2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
