import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ChartsComponent } from '../charts/charts.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopnavComponent } from '../topnav/topnav.component';
import { SettingsComponent } from '../settings/settings.component';
@NgModule({
  declarations: [
    MainComponent,
    ChartsComponent,
    HomeComponent,
    TopnavComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class MainModule { }
