import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbService } from 'src/app/service/db.service';
import { ToastService } from 'src/app/service/toast.service';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  chartData!: ChartConfiguration<any>['data'];
  defaultDate!: Date;
  language!: string;
  gender!: string;
  allUsers: any;
  showSpinner=false;
  constructor(public db: DbService, public toast: ToastService) {}
  ngOnInit(): void {
    this.gender = 'Male';
    this.defaultDate = new Date();
    this.getalldetails();
  }
  onSubmit() {
    let body = this.userForm.value;
    body.date = this.formatdate(body.date);
    this.db.addOne(body).subscribe({
      next: (data) => {
        this.clearForm();
        this.toast.successalert(
          'data saved successfully',
          'post saving status'
        );
        this.getalldetails();
      },
      error: (err) => {
        console.log('error occured', err);
      },
    });
  }

  formatdate(date: Date) {
    let year = date.getFullYear();
    let month = `${date.getMonth() + 1}`.padStart(2, '0');
    let day = `${date.getDate()}`.padStart(2, '0');
    return `${day}-${month}-${year}`;
  }
  selectlanguage(language: any) {
    this.language = language;
  }
  clearForm() {
    this.userForm.reset();
  }
  getalldetails() {
    this.db.getdata().subscribe({
      next: (data) => {
        this.allUsers = data;
        this.allUsers.forEach((ele: any) => {
          let thisyear = new Date().getFullYear();
          let birthyear = ele.date.split('-')[2];
          let age = thisyear - birthyear;
          ele.age = age;
          ele.salary=age*1000
        });
        console.log(this.allUsers);
        const names:any[]=[]
        const ages:any[]=[]
        const salaries:any=[]
        this.allUsers.map((e: any) => {
          return names.push(e.username);
        });
        console.log(names);
        this.allUsers.map((e: any) => {
          return ages.push(e.age);
        });
        this.allUsers.map((e:any)=>{
          return salaries.push(e.salary)
        })
        console.log(ages);
        this.chartData = {
          xLabels: names,
          datasets: [
            {
              label: 'age',
              data: ages,
              type: 'bar',
              borderRadius: 100,
              yAxisID:'agesId',
            },
            {
              label:'salary',
              color:'white',
              data:salaries,
              type:'line',
              tension:0.5,
              yAxisID:'salaryId',
              pointRadius:5,
              pointHoverRadius:8,
              pointBackgroundColor:'white',
              pointBorderColor:'skyblue',
              pointBorderWidth:2
            }
          ],
        };
        this.showSpinner=true
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  chartOptions: ChartConfiguration<any>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y:[
        {
          grid: {
            type:'linear',
            position:'left',
            display:true,
            id:'agesId'
          },
          ticks: {
            stepSize: 10,
            min: 0,
            max: 50,
          },
        },
        {
          grid:{
            type:'linear',
            position:'right',
            display:false,
            id:'salaryId'
          },
          ticks:{
            stepSize:10000,
            min:10000,
            max:100000
          }
        }

      ] 
    },
  };
}
