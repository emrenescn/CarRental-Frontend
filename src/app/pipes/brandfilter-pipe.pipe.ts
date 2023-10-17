import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandfilterPipe'
})
export class BrandfilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
