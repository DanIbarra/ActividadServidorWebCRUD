import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaUsuariosComponent } from './pages/tabla-usuarios/tabla-usuarios.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CrearUsuarioComponent } from './pages/crearusuario/crearusuario.component';
import { ActualizarUsuarioComponent } from './pages/actualizar-usuario/actualizar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaUsuariosComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
