import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';
import { ToastService } from 'src/app/service/toast.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public userForm!:FormGroup;
  public userlist:any;
  public itemid:any;
  public postForm=true;
  public username:any;
  public email:any;
  public phone:any;
  public dob:any;
  public gender:any;
  constructor(public dbservice:DatabaseService, public toast:ToastService){}
  ngOnInit(): void {
    this.getalldata()
    this.userForm=new FormGroup({
      "username":new FormControl('',[Validators.required]),
      "email":new FormControl('',[Validators.required]),
      "phone":new FormControl('',[Validators.required]),
      "gender":new FormControl('Male'),
      "dob":new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    const date=this.userForm.get('dob')?.value
    const month=date.getMonth()+1;
    const body={
      name:this.userForm.get('username')?.value,
      email:this.userForm.get('email')?.value,
      phone:this.userForm.get('phone')?.value,
      gender:this.userForm.get('gender')?.value,
      dob:date.getDate()+'/'+month+'/'+date.getFullYear()
    }
    this.dbservice.postdata(body).subscribe({
      next:(data)=>{
        this.getalldata()
        this.clearform()
        this.toast.successalert('object added successfully','post request')
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

  clearform(){
    this.userForm.reset()
  }
getalldata(){
  this.dbservice.getdata().subscribe({
    next:(data:any)=>{
      this.userlist=data;
      console.log("raw data",this.userlist)
      const today=new Date()
      this.userlist.forEach((e:any)=>{
        let byear=e.dob.split('/')[2]
        let age=today.getFullYear()-byear;
        e.age=age;
      })
      console.log(this.userlist)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
deleteitem(id:any){
 this.itemid=id;
 console.log(this.itemid)
}
onDelete(){
  this.dbservice.deletedata(this.itemid).subscribe({
    next:(data)=>{
      this.getalldata()
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
public editid:any
edit(user:any){
  console.log(user)
  this.postForm=false
  this.editid=user.id
  this.username=this.userForm.get('username')?.setValue(user.name)
  this.email=this.userForm.get('email')?.setValue(user.email)
  this.phone=this.userForm.get('phone')?.setValue(user.phone)
  this.dob=this.userForm.get('dob')?.setValue(user.dob)
  this.gender=this.userForm.get('gender')?.setValue(user.gender)

}
savechanges(){
  const body={
    id:this.editid,
    name:this.username,
    email:this.email,
    phone:this.phone,
    gender:this.gender
  }
  this.dbservice.edituser(this.editid,body).subscribe(
    {
      next:(data)=>{
        console.log(data)
        this.getalldata()
      },
      error:(err)=>{
        console.log(err)
      }
    }
  )
}

gotopostpage(){
  this.postForm=true;
  this.userForm.reset()
}



}
