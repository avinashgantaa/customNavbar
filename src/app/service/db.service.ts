import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public baseurl="http://localhost:3000/students";
  constructor(public http:HttpClient) { }
  addOne(body:any){
    return this.http.post(this.baseurl,body)
  }
  getdata(){
    return this.http.get(this.baseurl)
  }
}
