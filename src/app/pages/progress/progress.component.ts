import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: []
})
export class ProgressComponent implements OnInit {

  porciento: number = 30;
  constructor() { }

  ngOnInit(): void {
  }  
}
