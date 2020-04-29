import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagoServiceService } from '../../services/service/pago-service.service';
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';
import { Router } from '@angular/router';
import { interval, Subscription, from } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-envio',
  templateUrl: './datos-envio.component.html',
  styleUrls: ['./datos-envio.component.css']
})
export class DatosEnvioComponent implements OnInit {

  subConsultaEST: Subscription;
  flagMensajeEST: boolean = false;
  flagMensajeFloat: boolean = false;

  envioDinero: FormGroup;
  submitted = false;
  montoEnvio = '';

  constructor(private PagoService: PagoServiceService, private sweetAlertService: SweetAlertService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.envioDinero = this.formBuilder.group({
      montoEnvio: ['', [Validators.required]],
    }, {
    });
  }
 // convenience getter for easy access to form fields
 get f() { return this.envioDinero.controls; }
 onSubmit() {
   this.submitted = true;
   // stop here if form is invalid
   if (this.envioDinero.invalid) {
       return;
   }
   // display form values on success
   //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
   this.timerInicio();
 }
  async estadoFlouting() {
    var response = await this.PagoService.estadSalud();
    console.log("estado salud:" + JSON.stringify(response));
    if (response['statusMaquina'].floating) {
      if (!this.flagMensajeFloat) {
        this.sweetAlertService.swalLoading("Por favor espere unos segundos");
        this.flagMensajeFloat = true;
      }
    }
    else {
      if (this.flagMensajeFloat) {
        Swal.close();
      }
      this.flagMensajeFloat = false;
      if (this.subConsultaEST) this.subConsultaEST.unsubscribe();
      this.inicioPago();
    }
  }
  async inicioPago() {
    localStorage.setItem("montoEnvio", this.envioDinero.value.montoEnvio);
    console.log("dineroenvio " + this.envioDinero.value.montoEnvio);
    this.sweetAlertService.swalLoading("Iniciando");
    let response = await this.PagoService.iniciarPago(parseInt(this.envioDinero.value.montoEnvio));
    Swal.close();
    if (response['bloqueoEfectivo']) {
      this.PagoService.finalizarPago();
      this.flagMensajeEST = true;
      this.sweetAlertService.swalLoading("Temporalmente fuera de servicio");
      setTimeout( () => {
      }, 6000 );
    }
    else {
      if (response['status']) {
          this.router.navigate(['/pagoEnvio']);
          this.sweetAlertService.swalSuccess("Ingrese dinero");
      }
      else {
        this.sweetAlertService.swalErrorM("Tenemos un problema, favor vuelva a intentarlo");
        setTimeout( () => {
        }, 6000 );
        this.router.navigate(['/']); 
      }
    }
  }
  onReset() {
      this.submitted = false;
      this.envioDinero.reset();
  }
  timerInicio() {
    const source = interval(1000);
    this.subConsultaEST = source.subscribe(val => this.estadoFlouting());
  }
  ngOnDestroy() {
    if (this.subConsultaEST)this.subConsultaEST.unsubscribe();
  }
}
