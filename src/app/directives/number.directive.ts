import { Directive, ViewChild,ElementRef, OnInit, HostListener } from '@angular/core';
@Directive({
  selector: '[appNumber]'
})
export class NumberDirective implements OnInit{
  constructor(public ele:ElementRef) { }
  ngOnInit(): void {
    console.log(this.ele.nativeElement.value)
  }
  @HostListener('keypress') keypress(){
    const totallength=this.ele.nativeElement.value.length+1;
    if(totallength<=10){
      return true
    }
    else{
      return false
    }
  }
  

}
