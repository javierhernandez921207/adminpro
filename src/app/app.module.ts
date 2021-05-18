import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';

//temporal
import { FormsModule } from '@angular/forms';
import { GraficaDonaComponent } from './components/grafica-dona/grafica-dona.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,     
    RegisterComponent, 
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,    
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
