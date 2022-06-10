import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignInitial'
})
export class AssignInitialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
