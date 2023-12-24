import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { canvasToBlob } from 'blob-util';
import { Router } from '@angular/router';
import { AuthlogicService } from 'src/app/service/authlogic.service';
import { ToastService } from 'src/app/service/toast.service';
@Component({
  selector: 'app-frlogin',
  templateUrl: './frlogin.component.html',
  styleUrls: ['./frlogin.component.scss'],
})
export class FrloginComponent implements OnInit {
  @ViewChild('video') video!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  public localStream: any;
  public capture=true;
  public blobUrl:any;
  constructor(public router:Router, public logic:AuthlogicService,public toast:ToastService){}
  ngOnInit(): void {
    this.streamVideo();
  }
  streamVideo() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        this.localStream = stream;
      });
    }
  }
  capturephoto() {
    const context = this.canvas.nativeElement.getContext('2d');
    const srcHeight = 500;
    const srcWidth = 500;
    const destHeight = this.video.nativeElement.videoHeight;
    const destWidth = this.video.nativeElement.videoWidth;
    const ratio = srcWidth / destWidth;
    context.canvas.height = destHeight;
    context.canvas.width = destWidth;
    context.translate(destWidth, 0);
    context.scale(-1, 1);
    context.drawImage(
      this.video.nativeElement,
      srcWidth / 2 - (destWidth / 2) * ratio,
      srcHeight / 2 - (destHeight / 2) * ratio,
      destWidth,
      destHeight * ratio,
      0,
      0,
      destWidth,
      destHeight
    );
    this.video.nativeElement.style.display='none';
    this.canvas.nativeElement.style.display='block';
    this.localStream.getTracks()[0].stop()
    this.capture=false;
  }
  retakephoto(){
    this.streamVideo()
    this.video.nativeElement.style.display='block';
    this.canvas.nativeElement.style.display='none';
    this.video.nativeElement.style.marginBottom='10px'
    this.capture=true;
  }
 verify(){
  canvasToBlob(this.canvas.nativeElement,'image/png').then((image:Blob)=>{
    console.log(image)
    this.blobUrl=URL.createObjectURL(image);
  })
  this.logic.login()
  this.router.navigate(['/main'])
  this.toast.successalert('Login Success','Login status')
 }
}
