import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import { SettingService } from '../../services/setting.service';

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

  ngOnInit(): void {}

  cambiarColor(tema: string, link: any) {
    
    this.aplicarCheck(link);
    this._serviceAjustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    console.log(selectores);
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
