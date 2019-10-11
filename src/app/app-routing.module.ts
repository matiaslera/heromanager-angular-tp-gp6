import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { RelacionesComponent} from './relaciones/relaciones.component'
import { NewEquipoComponent } from './new-equipo/new-equipo.component'

export const routes: Routes =[
   {path:'',component:LoginComponent},
   {path:'equipos',canActivate:[AuthGuard], component:HomeComponent},
   {path:'relaciones', canActivate:[AuthGuard], component:RelacionesComponent},
   {path:'equipos/nuevo',canActivate:[AuthGuard], component:NewEquipoComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
