import { PAGES_ROUTES } from './pages.routes';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
//graficas
import { ChartsModule } from 'ng2-charts';
import { AcountSettingComponent } from './acount-setting/acount-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AcountSettingComponent,
        PromesasComponent,
        RxjsComponent       
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,        
    ],
    imports:[
        SharedModule,
        FormsModule,
        ChartsModule,
        CommonModule,
        ReactiveFormsModule,
        PAGES_ROUTES,
    ]
})

export class PagesModule{}