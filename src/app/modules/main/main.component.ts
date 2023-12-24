import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthlogicService } from 'src/app/service/authlogic.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  public userphoto:any;
  public username:any
  constructor(public router:Router, public logic:AuthlogicService){}

  onLogout(){
    this.logic.logout()
    this.router.navigate(['/'])
  }

}
