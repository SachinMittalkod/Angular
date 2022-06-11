import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proficiency'
})
export class ProficiencyPipe implements PipeTransform {

  transform(value: number, AngularProficiency:number): string {

     if(AngularProficiency >2){
      return 'Good';
     }
     else if(AngularProficiency >3){
      return 'excellent' 
     }

    return null;
  }

}
