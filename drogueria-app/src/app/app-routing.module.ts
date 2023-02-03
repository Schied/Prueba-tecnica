import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { VentaComponent } from './components/venta/venta.component';

const routes: Routes = [
  {path: '', component: MedicamentoComponent},
  {path: 'ventas', component: VentaComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
