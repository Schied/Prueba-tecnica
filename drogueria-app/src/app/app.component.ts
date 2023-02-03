import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'drogueria-app';
  items: MenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
      this.items = [
          {
              label: 'Medicamentos',
              items: [{
                      label: 'Consultar',
                      command: () => this.showMedicamentos(),
                  },
              ]
          },
          {
              label: 'Ventas',
              items: [
                  {label: 'Consultar', command: () => this.showVentas(),},
              ]
          }
      ];
  }

  showMedicamentos(): void{
    this.router.navigateByUrl('/');
  }
  showVentas(): void{
    this.router.navigateByUrl('/ventas');
  }
}
