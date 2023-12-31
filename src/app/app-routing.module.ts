import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { WildrouteComponent } from './wildroute/wildroute.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'main',loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule),canActivate:[AuthService]},
  {path:'**',component:WildrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
