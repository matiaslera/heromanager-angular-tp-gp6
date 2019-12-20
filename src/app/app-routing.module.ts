import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { NewEquipoComponent } from './nuevoEquipo/nuevoEquipo.component'
import { MisEquiposComponent } from './misEquipos/misEquipos.component';
import { ProfileComponent } from './profile/profile.component';
import { RelationsComponent } from './relations/relations.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: 'misequipos', component: MisEquiposComponent },
      { path: 'relaciones', component: RelationsComponent },
      { path: '', redirectTo: 'misequipos', pathMatch: 'full' },
    ]},
  { path: 'perfil/:id', canActivate: [AuthGuard], component: ProfileComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
