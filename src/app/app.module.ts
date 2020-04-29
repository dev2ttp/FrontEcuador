import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule  } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2Rut } from 'ng2-rut';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PagoServiceService } from './services/service/pago-service.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecargaTelefonoComponent } from './components/recarga-telefono/recarga-telefono.component';
import { DatosTelefonoComponent } from './components/datos-telefono/datos-telefono.component';
import { PagoTelefonoComponent } from './components/pago-telefono/pago-telefono.component';
import { FinpagoTelefonoComponent } from './components/finpago-telefono/finpago-telefono.component';
import { DatosEnvioComponent } from './components/datos-envio/datos-envio.component';
import { PagoEnvioComponent } from './components/pago-envio/pago-envio.component';
import { FinpagoEnvioComponent } from './components/finpago-envio/finpago-envio.component'
import { MAT_KEYBOARD_LAYOUTS } from '@ngx-material-keyboard/core';
import { customMaterialKeyboard } from './custom/keyboard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InicioComponent,
    RecargaTelefonoComponent,
    DatosTelefonoComponent,
    PagoTelefonoComponent,
    FinpagoTelefonoComponent,
    DatosEnvioComponent,
    PagoEnvioComponent,
    FinpagoEnvioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatKeyboardModule,
    ModalModule.forRoot(),
    Ng2Rut
  ],
  providers: [
    PagoServiceService,
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customMaterialKeyboard }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
