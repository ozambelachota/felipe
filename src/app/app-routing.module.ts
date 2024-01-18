import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageItinerarioComponent } from './pages/page-itinerario/page-itinerario.component';
import { PageUsuarioComponent } from './pages/page-usuario/page-usuario.component';
import { RegistroBusComponent } from './pages/registro-bus/registro-bus.component';
import { RegistroChoferComponent } from './pages/registro-chofer/registro-chofer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: PageAdminComponent,
    children: [
      {
        path: 'chofer',
        component: RegistroChoferComponent,
      },
      {
        path: 'bus',
        component: RegistroBusComponent,
      },
      {
        path: 'itinerario',
        component: PageItinerarioComponent,
      },
      { path: 'usuario', component: PageUsuarioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
