import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  ajustes: IAjustes = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css',
  };
  constructor() {
    this.cargarAjustes();
  }
  guardarAjustes() {
    //Guardar de manera local
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  cargarAjustes() {
    //Cargar ajustes de manera local
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
      console.log('cargando ajustes');
    } else {
      this.aplicarTema(this.ajustes.tema);
      console.log('no se pueden cargar los ajustes aplicando los por defecto');
    }
  }
  aplicarTema(tema: string) {
    console.log(tema);
    let url = `assets/css/colors/${tema}.css`;
    document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface IAjustes {
  temaUrl: string;
  tema: string;
}
