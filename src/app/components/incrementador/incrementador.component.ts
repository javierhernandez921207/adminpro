import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  @Input() leyenda: string = "Leyenda";

  @Input() porciento: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtprogress') txtprogress: ElementRef; 

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onChange(valor: number) {
    if (valor >= 100)
      this.porciento = 100;
    else if (valor <= 0)
      this.porciento = 0;
    else
      this.porciento = valor;
    console.log(valor);
    //asiganar valor de porciento a elemento input html
    this.txtprogress.nativeElement.value = this.porciento;
    this.txtprogress.nativeElement.focus();
    //esta es la var que recibe el otro comp
    this.cambioValor.emit(this.porciento);

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
    this.cambioValor.emit(this.porciento);
  }
}
