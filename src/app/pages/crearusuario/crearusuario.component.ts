import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrearUsuarioModel } from 'src/app/interface/crear-usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor( private service: UsuariosService, private fb: FormBuilder, private router: Router ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      password: [],
      rol: []
    });
  }

  guardar() {
    if( this.formulario.status == 'VALID' ){
      const info = this.formulario.value;

      const usuario : CrearUsuarioModel = {
        nombre: info.nombre,
        correo: info.correo,
        password: info.password,
        rol: info.rol,
        no_control: '18330449'
      };

      //console.log( usuario );
      this.service.postUsuario( usuario ).subscribe( res => {
        console.log(res);
        this.router.navigate(['tableUsuarios']);
      });
    }
  }

}