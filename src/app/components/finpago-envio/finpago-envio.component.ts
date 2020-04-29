import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finpago-envio',
  templateUrl: './finpago-envio.component.html',
  styleUrls: ['./finpago-envio.component.css']
})
export class FinpagoEnvioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => { this.router.navigate(['/']) }, 10000);
  }

}
