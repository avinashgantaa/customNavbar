import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DbService } from 'src/app/service/db.service';
import { PhoneDirective } from 'src/app/directives/phone.directive';
import { ToastService } from 'src/app/service/toast.service';
import { ChartsComponent } from '../charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { GenderPipe } from 'src/app/pipes/gender.pipe';
@NgModule({
  declarations: [
    MainComponent,
    PhoneDirective,
    ChartsComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgChartsModule
  ],
  providers:[DbService,ToastService]
})
export class MainModule { }
