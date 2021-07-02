import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private fb: FormBuilder,
              private service: UsuariosService) { 
    this.service.getUsuario().subscribe(res => {
      console.log(res);
    });
    
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:[''],
      correo:[''],
      rol:['']
    });
  }
  guardar() {
    if(this.formulario.status == 'VALID'){
      console.log( this.formulario.value )
    }
  }
}
