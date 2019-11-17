import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card',
  pure:false
})
export class CardPipe implements PipeTransform {

  transform(x): any {
    return x.sort((y,z)=>{return y-z})
  }

}