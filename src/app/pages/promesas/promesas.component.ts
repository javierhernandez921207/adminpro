import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(mesnsaje => console.log('terminió ', mesnsaje))
      .catch(error => console.error("error en la promesa", error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
