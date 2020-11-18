import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';
import { DepartamentoService } from './../../services/departamento.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
})
export class InsertarComponent implements OnInit {
  @ViewChild('cajaNombre') cajaNombre: ElementRef;
  @ViewChild('cajaNumero') cajaNumero: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad: ElementRef;

  constructor(private _service: DepartamentoService, private _router: Router) {
    this.cajaNumero = ElementRef.prototype;
    this.cajaNombre = ElementRef.prototype;
    this.cajaLocalidad = ElementRef.prototype;
  }
  insertarDepartamento() {
    var numero = parseInt(this.cajaNumero.nativeElement.value);
    var nombre = this.cajaNombre.nativeElement.value;
    var localidad = this.cajaLocalidad.nativeElement.value;
    //Luego insertamos mediante el servicio
    var depart = new Departamento(numero, nombre, localidad);
    this._service.insertarDepartamento(depart).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
