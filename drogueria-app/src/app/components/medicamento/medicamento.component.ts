import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VentaService } from 'src/app/services/venta.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit{

  medicamentos: Medicamento[] = [];
  cols: any[] = [];
  msgs: any[] = [];
  modalMed: boolean = false;
  modalMMed: boolean = false;
  modalVenta: boolean = false;
  frmMedicamento: any;
  frmMMedicamento: any;
  medVenta: any;
  precio: number = 0;
  medicamento: any = {
    id: null,
    nombre: null,
    fecha_fabricacion: null,
    fecha_vencimiento: null,
    stock: null,
    valor: null
  }
  venta: any = {
    fecha: null,
    hora: null,
    medicamento: null,
    cantidad: null,
    valor_unitario: null,
    valor_total: null
  };

  constructor(private medicamentoService: MedicamentoService, private ventaService: VentaService, private messageService: MessageService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getMedicamentos();
    this.cols = [
      {fields: "id", header: "Id"},
      {fields: "nombre", header: "Nombre"},
      {fields: "laboratorio", header: "Laboratorio"},
      {fields: "fecha_fabricacion", header: "Fecha de fabricacion"},
      {fields: "fecha_vencimiento", header: "Fecha de vencimiento"},
      {fields: "stock", header: "Cantidad"},
      {fields: "valor", header: "Valor Unitario"},
    ]
    this.frmMedicamento = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      laboratorio: ['', [Validators.required, Validators.minLength(3)]],
      fecha_fabricacion: ['', [Validators.required]],
      fecha_vencimiento: ['', [Validators.required]],
      stock: ['', [Validators.required, Validators.min(1)]],
      valor: ['', [Validators.required, Validators.min(100)]],
    });
    this.frmMMedicamento = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      laboratorio: ['', [Validators.required, Validators.minLength(3)]],
      fecha_fabricacion: ['', [Validators.required]],
      fecha_vencimiento: ['', [Validators.required]],
      stock: ['', [Validators.required, Validators.min(1)]],
      valor: ['', [Validators.required, Validators.min(100)]],
    });
  }

  getMedicamentos(){
    this.medicamentoService.getMedicamentos().subscribe( (result): any =>{
      let meds: Medicamento[] = [];
      for (const element of result) {
        element.fecha_fabricacion = this.formDate(element.fecha_fabricacion);
        element.fecha_vencimiento = this.formDate(element.fecha_vencimiento);
        meds.push(element);
      }
      this.medicamentos = meds;
    },
    error => {
      console.log(error);
    }
    );
  }

  showModalMed(): void{
    this.modalMed = true;
  }

  RegistrarMed(): void{
    let form = {
      nombre: this.frmMedicamento.controls['nombre'].value,
      laboratorio: this.frmMedicamento.controls['laboratorio'].value,
      fecha_fabricacion: new Date(`${this.frmMedicamento.controls['fecha_fabricacion'].value}T00:00:00`),
      fecha_vencimiento: new Date(`${this.frmMedicamento.controls['fecha_vencimiento'].value}T00:00:00`),
      stock: this.frmMedicamento.controls['stock'].value,
      valor: this.frmMedicamento.controls['valor'].value
    }
    this.medicamentoService.save(form).subscribe(res => {
      if(res){
        this.modalMed = false;
        this.frmMedicamento.reset();
        this.getMedicamentos();
      }
    })
  }

  editarMedicamento(medId: number): void{
    let med: any = this.medicamentos.find(ele => ele.id == medId);
    this.frmMMedicamento = this.formBuilder.group({
      id: [med.id, [Validators.required]],
      nombre: [med.nombre, [Validators.required, Validators.minLength(3)]],
      laboratorio: [med.laboratorio, [Validators.required, Validators.minLength(3)]],
      fecha_fabricacion: [med.fecha_fabricacion, [Validators.required]],
      fecha_vencimiento: [med.fecha_vencimiento, [Validators.required]],
      stock: [med.stock, [Validators.required, Validators.min(1)]],
      valor: [med.valor, [Validators.required, Validators.min(100)]],
    });
    console.log(med);
    this.modalMMed = true;
  }

  venderMedicamento(medId: number): void{
    this.medVenta = this.medicamentos.find(ele => ele.id == medId);
    this.precio = this.medVenta.valor;
    this.modalVenta = true;
  }

  ModificarMed(): void{
    let form = {
      id: this.frmMMedicamento.controls['id'].value,
      nombre: this.frmMMedicamento.controls['nombre'].value,
      laboratorio: this.frmMMedicamento.controls['laboratorio'].value,
      fecha_fabricacion: new Date(`${this.frmMMedicamento.controls['fecha_fabricacion'].value}T00:00:00`),
      fecha_vencimiento: new Date(`${this.frmMMedicamento.controls['fecha_vencimiento'].value}T00:00:00`),
      stock: this.frmMMedicamento.controls['stock'].value,
      valor: this.frmMMedicamento.controls['valor'].value
    }
    this.medicamentoService.update(form).subscribe(res => {
      console.log(res);
      if(res){
        this.modalMMed = false;
        this.getMedicamentos();
      }
    })
  }

  eliminarMedicamento(medId: number){
    console.log(medId);
    this.medicamentoService.delete(medId).subscribe(res => {
      this.getMedicamentos();
    })
  }

  VenderMed(): void{
    if(this.venta.cantidad<=this.medVenta.stock && this.venta.cantidad>0){
      this.medVenta.stock -= this.venta.cantidad;
      this.medVenta.fecha_fabricacion = new Date(`${this.medVenta.fecha_fabricacion}T00:00:00`);
      this.medVenta.fecha_vencimiento = new Date(`${this.medVenta.fecha_vencimiento}T00:00:00`);
      this.medicamentoService.update(this.medVenta).subscribe(res => {
        if(res){
          this.getMedicamentos();
        }
      });
      let fecha = new Date();
      this.venta.fecha = fecha;
      this.venta.hora = (fecha.getHours().toString().length==1 ? `0${fecha.getHours()}` : fecha.getHours())+":"+(fecha.getMinutes().toString().length==1 ? `0${fecha.getMinutes()}` : fecha.getMinutes());
      this.venta.medicamento = this.medVenta.nombre;
      this.venta.valor_unitario = this.medVenta.valor;
      this.venta.valor_total = this.medVenta.valor * this.venta.cantidad;
      this.ventaService.save(this.venta).subscribe(res => {
        if(res){
          this.venta.cantidad = 0;
          this.modalVenta = false;
          this.messageService.add({severity:'success', summary:'Exito!', detail:'Se ha realizado la venta'});
        }
      })
    }else{
      if(this.venta.cantidad<1){
        this.msgs = [{severity:'info', summary:'Info', detail:'Cantidad invalida'}];
      }else{
        this.msgs = [{severity:'error', summary:'Error', detail:'Stock insuficiente'}];
      }

    }

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
