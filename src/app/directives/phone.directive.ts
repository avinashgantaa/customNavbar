import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(public ele:ElementRef) { }
  @HostListener('keypress') keypress(){
    let length=this.ele.nativeElement.value.length+1;
    if(length<=10){
      return true
    }
    else{
      return false;
    }
  }

}
