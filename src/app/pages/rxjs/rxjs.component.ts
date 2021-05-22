import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscripcion: Subscription;

  constructor() {
    this.subscripcion = this.regresarObservable().subscribe(
      numero => console.log('subs', numero),
      error => console.error('error en el obs', error),
      () => console.log('El obs terminó')
    );
  } 

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("destroy ok");
    this.subscripcion.unsubscribe();
  }


  regresarObservable(): Observable<any> {
    return new Observable(
      (observer: Subscriber<any>) => {
        let contador = 0;
        let intervalo = setInterval(() => {
          contador += 1;

          const salida = {
            valor: contador
          }

          observer.next(salida);

          /* if (contador === 3) {
            clearInterval(intervalo);
            observer.complete();
          } */

          /* if (contador == 2) {
            clearInterval( intervalo);
            observer.error('auxilio');
          } */
          
        }, 1000);
      }
    ).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        //console.log('Filter ', valor, index);
        if ((valor % 2 === 1))
          return true;
        else
          return false;
      })
    );
  }

}
