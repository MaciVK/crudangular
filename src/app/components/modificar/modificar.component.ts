import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from './../../models/Departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  public departamento: Departamento;
  @ViewChild('cajaNombre') cajaNombre: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad: ElementRef;
  constructor(
    private _service: DepartamentoService,
    private _router: Router,
    private _activeroute: ActivatedRoute
  ) {}
  buscarDepartamento(idDepartamento) {
    this._service.searchDepartamento(idDepartamento).subscribe(
      (respuesta) => {
        this.departamento = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  modificarDepartamento() {
    this.departamento.nombre = this.cajaNombre.nativeElement.value;
    this.departamento.localidad = this.cajaLocalidad.nativeElement.value;
    this._service.updateDepartamento(this.departamento).subscribe(
      (respuesta) => {
        alert('BLEH');
        this._router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      this.buscarDepartamento(params.iddepartamento);
    });
  }
}
