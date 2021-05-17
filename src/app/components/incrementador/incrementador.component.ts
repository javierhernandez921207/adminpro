import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  @Input() leyenda:string = "Leyenda";

  @Input() porciento: number = 50;

  constructor() {
    console.log()
   }

  ngOnInit(): void {
  }

  cambiarValor(valor: number) {
    if (this.porciento >= 100 && valor > 0) {
      this.porciento = 100;
      return;
    }
    if (this.porciento <= 0 && valor < 0) {
      this.porciento = 0;
      return;
    }
    this.porciento += valor;
  }
}
