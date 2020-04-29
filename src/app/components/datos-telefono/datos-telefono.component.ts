import { Component, OnInit } from '@angular/core';
import {MustMatch} from '../../services/match/validatorMatch'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagoServiceService } from '../../services/service/pago-service.service';
import { SweetAlertService } from '../../services/sweet-alert/sweet-alert.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PagoTelefono } from 'src/app/models/pago/pagoTelefono';
import { interval, Subscription, from } from 'rxjs';

@Component({
  selector: 'app-datos-telefono',
  templateUrl: './datos-telefono.component.html',
  styleUrls: ['./datos-telefono.component.css']
})
export class DatosTelefonoComponent implements OnInit {

  subConsultaEST: Subscription;
  flagMensajeEST: boolean = false;
  flagMensajeFloat: boolean = false;
  
  registerForm: FormGroup;
  submitted = false;
  identificador1 = '';
  identificador2 = '';
  monto = '';

  pago: PagoTelefono = {
    identificador1: 0,
    identificador2: 0,
    montoAPagar: "",
    dineroIngresado: 0,
    dineroFaltante: 0
  };

  constructor(private formBuilder: FormBuilder, private PagoService: PagoServiceService, private sweetAlertService: SweetAlertService,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificador1: ['', [Validators.required]],
      identificador2: ['', Validators.required],
      monto: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(5)]],
    }, {
      validator: MustMatch('identificador1', 'identificador2')
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
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
    localStorage.setItem("monto", this.registerForm.value.monto);
    this.sweetAlertService.swalLoading("Iniciando");
    let response = await this.PagoService.iniciarPago(parseInt(this.registerForm.value.monto));
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
          this.router.navigate(['/pagoTelefono']);
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
      this.registerForm.reset();
  }
  timerInicio() {
    const source = interval(1000);
    this.subConsultaEST = source.subscribe(val => this.estadoFlouting());
  }
  ngOnDestroy() {
    if (this.subConsultaEST)this.subConsultaEST.unsubscribe();
  }
}
