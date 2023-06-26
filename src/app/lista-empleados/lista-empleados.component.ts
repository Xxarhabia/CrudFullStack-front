import { Component, OnInit, } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoSerivice:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(idEmpleado:number){
    this.router.navigate(['acutalizar-empleado', idEmpleado]);
  }

  eliminarEmpleado(idEmpleado:number){
    this.empleadoSerivice.eliminarEmpleado(idEmpleado).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

  private obtenerEmpleados(){
    this.empleadoSerivice.listarTodosLosEmpleados().subscribe(dato =>{
      this.empleados = dato;
    });
  }
}
