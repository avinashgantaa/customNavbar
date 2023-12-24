import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthlogicService } from 'src/app/service/authlogic.service';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit{
  public photo:any;
  public username:any;
  constructor(public router: Router, public logic:AuthlogicService){}
  ngOnInit(): void {
    this.photo=sessionStorage.getItem('photo')
    this.username=sessionStorage.getItem('lastname')
    
  }

  onLogout(){
    this.logic.logout()
    this.router.navigate(['/'])
  }

}
