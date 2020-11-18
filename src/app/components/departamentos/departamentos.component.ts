import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from './../../services/departamento.service';
import { Departamento } from './../../models/Departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {
  public arrayDepartamentos: Array<Departamento>;
  constructor(
    private _service: DepartamentoService,
    private _activeroute: ActivatedRoute
  ) {
    this.arrayDepartamentos = [];
  }

  eliminarDepartamento(id) {
    this._service.deleteDepartamento(id).subscribe(
      (response) => {
        this.cargarDepartamentos();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  cargarDepartamentos() {
    this._service.getDepartamentos().subscribe(
      (respuesta) => {
        this.arrayDepartamentos = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    //Recibimos en la url en 1 param o no...
    this._activeroute.params.subscribe((params: Params) => {
      if (params.iddepartamento != null) {
        this.eliminarDepartamento(params.iddepartamento);
      } else {
        this.cargarDepartamentos();
      }
    });
  }
}
