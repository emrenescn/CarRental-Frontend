import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorfilterPipe'
})
export class ColorfilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
