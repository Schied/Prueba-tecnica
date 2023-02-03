import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { VentaComponent } from './components/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentoComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
