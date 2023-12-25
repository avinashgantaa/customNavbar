import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public baseUrl="http://localhost:3000/users"
  constructor(public http:HttpClient) { }
  postdata(body:any){
    return this.http.post(this.baseUrl,body)

  }
  getdata(){
    return this.http.get(this.baseUrl)
  }
  deletedata(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  edituser(id:any,body:any){
    return this.http.put(this.baseUrl+'/'+id,body)
  }
}
