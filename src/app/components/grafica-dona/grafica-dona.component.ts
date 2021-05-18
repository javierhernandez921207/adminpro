import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

  // otros tipos de grficas en ng2-charts 
  // Doughnut
  @Input() ChartLabels: Label[] = [];
  @Input() ChartData: MultiDataSet = [];
  @Input() ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
