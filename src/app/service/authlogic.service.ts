import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthlogicService {
  public isLoggedin=false;
  constructor() { }

  login(){
    sessionStorage.setItem('loginStatus','success')
    this.isLoggedin=true;
  }
  logout(){
    sessionStorage.removeItem('loginStatus')
    this.isLoggedin=false
  }
  isAuthenticated(){
    const onLogin=sessionStorage.getItem('loginStatus')
    if(onLogin==='success'){
      return true;
    }
    else{ 
      return false;
    }
  }

}
