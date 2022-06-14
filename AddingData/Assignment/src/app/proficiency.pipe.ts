import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proficiency'
})
export class ProficiencyPipe implements PipeTransform {

  transform(value: number, AngularProficiency:number): string {

     if(AngularProficiency  ===3 || AngularProficiency <4){
      return 'Good';
      
     }
    
     else if(AngularProficiency ===4 || AngularProficiency < 5){
      return 'very good'
     }
     else if(AngularProficiency ==5){
      return 'excellent'
     }
   
     else{
      return 'enter out of 5'
     }

    return null;
  }

}
