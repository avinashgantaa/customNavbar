import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): string {
    if(value==="Male"){
      return 'M';
    }
    else return 'F';
  }

}
