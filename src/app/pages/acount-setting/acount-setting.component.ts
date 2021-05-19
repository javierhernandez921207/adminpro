import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import { SettingService } from '../../services/settings/setting.service';

@Component({
  selector: 'app-acount-setting',
  templateUrl: './acount-setting.component.html',
  styles: [],
})
export class AcountSettingComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document,
    public _serviceAjustes: SettingService
  ) {}

  ngOnInit(): void {
    this.colocarcheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._serviceAjustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  colocarcheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._serviceAjustes.ajustes.tema;
    for (let ref of selectores) {      
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
