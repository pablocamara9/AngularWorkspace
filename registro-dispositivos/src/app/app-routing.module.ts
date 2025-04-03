import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistroDispositivosComponent } from './components/registro-dispositivos/registro-dispositivos.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'devices', component: RegistroDispositivosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
