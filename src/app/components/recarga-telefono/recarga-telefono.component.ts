import { Component, OnInit } from '@angular/core';
import { PagoServiceService } from '../../services/service/pago-service.service';
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recarga-telefono',
  templateUrl: './recarga-telefono.component.html',
  styleUrls: ['./recarga-telefono.component.css']
})
export class RecargaTelefonoComponent implements OnInit {

  constructor(private PagoService: PagoServiceService, private sweetAlertService: SweetAlertService, private router: Router) { }

  ngOnInit() {
    this.estadoSalud();
  }
  async estadoSalud() {
    var response = await this.PagoService.estadSalud();
    console.log("estado salud:" + JSON.stringify(response));
    if (response['bloqueoEfectivo']) {
      this.sweetAlertService.swalErrorM("Tenemos un problema, favor vuelva a intentarlo");
      setTimeout( () => {
      }, 6000 );
      this.router.navigate(['/']); 
    }
  }
}
