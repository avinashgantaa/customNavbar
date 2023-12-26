import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any):any{
    if(value==='Male'){
      return 'M'
    }
    else if(value==='Female'){
      return 'F'
    }
  }

}
