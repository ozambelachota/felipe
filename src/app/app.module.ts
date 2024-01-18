import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListBusComponent } from './components/list-bus/list-bus.component';
import { RegistroBusComponent } from './pages/registro-bus/registro-bus.component';
import { RegistroChoferComponent } from './pages/registro-chofer/registro-chofer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageItinerarioComponent } from './pages/page-itinerario/page-itinerario.component';
import { PageUsuarioComponent } from './pages/page-usuario/page-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusFormGuardarComponent } from './components/bus-form-guardar/bus-form-guardar.component';
import { ChoferFormGuardarComponent } from './components/chofer-form-guardar/chofer-form-guardar.component';
import { UsuarioFormGuardarComponent } from './components/usuario-form-guardar/usuario-form-guardar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBusComponent,
    RegistroBusComponent,
    RegistroChoferComponent,
    HomeComponent,
    LoginComponent,
    PageAdminComponent,
    PageItinerarioComponent,
    PageUsuarioComponent,
    BusFormGuardarComponent,
    ChoferFormGuardarComponent,
    UsuarioFormGuardarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
