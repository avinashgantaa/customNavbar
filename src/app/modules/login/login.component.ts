import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public user!:SocialUser;
  public frlogin=true;
  constructor(public authservice:SocialAuthService){}
  ngOnInit(){
    sessionStorage.clear()
    this.authservice.authState.subscribe({
      next:(data)=>{
        this.user=data;
        console.log(this.user)
        if(this.user!=null){
          console.log('user is not null')
          this.frlogin=false;
          sessionStorage.setItem('email',this.user.email)
          sessionStorage.setItem('photo',this.user.photoUrl)
          sessionStorage.setItem('lastname',this.user.lastName)
        }
        else{
          console.log(false)
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
  }

}
