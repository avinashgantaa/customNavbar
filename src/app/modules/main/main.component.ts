import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthlogicService } from 'src/app/service/authlogic.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  @ViewChild('signout') signout!:ElementRef
  public userphoto:any;
  public username:any
  constructor(public router:Router, public logic:AuthlogicService){}
  ngOnInit(): void {
    this.userphoto=sessionStorage.getItem('photo')
    console.log(this.userphoto)
    this.username=sessionStorage.getItem('lastname')
    console.log(this.username)
  }
  onLogout(){
    this.logic.logout()
    this.router.navigate(['/'])
  }

}
