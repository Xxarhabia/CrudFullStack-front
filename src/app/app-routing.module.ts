import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component : ListaEmpleadosComponent}, //cuendo esté en el path empleados muestre la lista
  {path : '', redirectTo : 'empleados', pathMatch : 'full'}, //en caso que el path este vacio tambien muestre la lista
  {path : 'registrar-empleado', component : RegistrarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
