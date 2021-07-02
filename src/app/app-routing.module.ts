import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './pages/actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './pages/crearusuario/crearusuario.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaUsuariosComponent } from './pages/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  { path: 'tablaUsuarios', component: TablaUsuariosComponent},
  { path: 'crearUsuario', component: CrearUsuarioComponent},
  { path: 'actualizarUsuario/:id', component: ActualizarUsuarioComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: '**', pathMatch: 'full', redirectTo:'tablaUsuarios'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
