import { Component } from '@angular/core';
import { SettingService } from './services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adminpro';
  //solo inyecto el servico y el cargar datos se llama en el constructor del servicio
  constructor(public _serviceAjustes: SettingService) {
    
  }
}
