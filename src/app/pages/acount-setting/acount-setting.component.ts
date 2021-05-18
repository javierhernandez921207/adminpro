import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';

@Component({
  selector: 'app-acount-setting',
  templateUrl: './acount-setting.component.html',
  styles: [],
})
export class AcountSettingComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document) {}

  ngOnInit(): void {}

  cambiarColor(color: string, link: any) {
    console.log(color);
    let url = `assets/css/colors/${color}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.aplicarCheck(link);
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
