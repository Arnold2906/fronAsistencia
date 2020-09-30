import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegistroIngresoModel } from 'src/app/models/registroingreso.models';
import { HomeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  codigo = '';
  registro: RegistroIngresoModel = new RegistroIngresoModel();
  hoy: Date;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  registrarHorario( form: NgForm ) {
    console.log(this.codigo);
    this.hoy = new Date();
    this.registro.codigo = this.codigo;
    this.registro.fecha = this.hoy.getDate() + '/' + ( this.hoy.getMonth() + 1 ) + '/' + this.hoy.getFullYear();
    this.registro.hora = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds();

    


    this.homeService.registrarHorario(this.registro).subscribe( resp => {
      Swal.fire({
        icon: 'success',
        title: 'Registrado',
        text: 'Asistencia Registrada'
      });

    }, ( err ) => {
      console.log(err);
      Swal.fire({
        title: 'Error al registrar',
        text: ' codigo incorrecto ',
        icon: 'error'
      });
    }

    );
  
  
  }


}
