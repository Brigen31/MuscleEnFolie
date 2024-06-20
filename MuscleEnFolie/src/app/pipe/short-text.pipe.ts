import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, maxLength: number): unknown {
    if (value.length > maxLength) {
      return value.substr(0, maxLength) + '...';
    }
    return value;
  }

}
