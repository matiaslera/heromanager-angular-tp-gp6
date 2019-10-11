import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from'./material.module'
import { LoginService } from './services/loginService/login.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RelacionesComponent} from './relaciones/relaciones.component'
import { AmigosService } from './services/amigosService/amigos.service';
import { HttpClientModule } from '@angular/common/http';
import { NewEquipoComponent} from './new-equipo/new-equipo.component'

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      RelacionesComponent,
      NewEquipoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      LoginService,
      AuthGuard,
      AmigosService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
