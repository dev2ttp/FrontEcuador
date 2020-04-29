import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finpago-telefono',
  templateUrl: './finpago-telefono.component.html',
  styleUrls: ['./finpago-telefono.component.css']
})
export class FinpagoTelefonoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => { this.router.navigate(['/']) }, 10000);
  }
}
