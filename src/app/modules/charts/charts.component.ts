import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  @Input() chartOptions:ChartConfiguration<any>['options']
  @Input() chartData!:ChartConfiguration<any>['data']
  chartLegend=true;
  chartPlugins=[]

}
