import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit{
  ventas: Venta[] = [];
  ventasAll: Venta[] = [];
  cols: any[] = [];
  date = new Date();
  today = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()<10 ? '0'+this.date.getDate() : this.date.getDate()}`;
  filtro = {
    Dateini: this.today,
    Datefin: this.today
  }
  constructor(private ventaService: VentaService, private messageService: MessageService){ }
  ngOnInit(): void {
    this.getVentas();
    this.cols = [
      {fields: "id", header: "Id"},
      {fields: "fecha", header: "Fecha de venta"},
      {fields: "hora", header: "Hora"},
      {fields: "medicamento", header: "Medicamento"},
      {fields: "cantidad", header: "Cantidad vendida"},
      {fields: "valor_unitario", header: "Valor Unitario"},
      {fields: "valor_total", header: "Valor Total"},
    ]
  }
  cambioFecha(){
    this.filtro.Datefin = this.filtro.Dateini;
  }
  getVentas(): void{
    this.ventaService.getVentas().subscribe( (result): any =>{
      let ventas: Venta[] = [];
      for (const element of result) {
        element.fecha = this.formDate(element.fecha);
        ventas.push(element);
      }
      this.ventas = ventas;
      this.ventasAll = ventas;
    },
    error => {
      console.log(error);
    }
    );
  }
  filtrarVentas(): void{
    let ventas = this.ventasAll.filter(ele => ele.fecha>=this.filtro.Dateini && ele.fecha<=this.filtro.Datefin);
    if(ventas.length>0){
      this.ventas = ventas;
    }else{
      this.messageService.add({severity:'info', summary:'Info', detail:'No se encontraron resultados'});
    }
  }
  resetVentas(){
    this.getVentas();
  }
  formDate(date: any) {
    let fecha = new Date(date),
        month = '' + (fecha.getMonth() + 1),
        day = '' + fecha.getDate(),
        year = fecha.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
  }
}
