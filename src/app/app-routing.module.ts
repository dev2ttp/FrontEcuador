import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {RecargaTelefonoComponent} from './components/recarga-telefono/recarga-telefono.component';
import {DatosTelefonoComponent} from './components/datos-telefono/datos-telefono.component';
import {PagoTelefonoComponent } from './components/pago-telefono/pago-telefono.component'
import { FinpagoTelefonoComponent } from './components/finpago-telefono/finpago-telefono.component';
import { DatosEnvioComponent } from './components/datos-envio/datos-envio.component'
import { PagoEnvioComponent } from './components/pago-envio/pago-envio.component';
import { FinpagoEnvioComponent } from './components/finpago-envio/finpago-envio.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'recargaTelefono', component:RecargaTelefonoComponent},
  { path: 'datosTelefono', component:DatosTelefonoComponent},
  { path: 'pagoTelefono', component:PagoTelefonoComponent},
  { path: 'finPagoTelefono', component:FinpagoTelefonoComponent},
  { path: 'datosEnvio', component:DatosEnvioComponent},
  { path: 'pagoEnvio', component:PagoEnvioComponent},
  { path: 'finPagoEnvio', component:FinpagoEnvioComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
