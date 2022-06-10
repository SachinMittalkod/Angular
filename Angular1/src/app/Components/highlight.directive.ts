import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef) {
    // this.ref.nativeElement.style.backgroundColor = 'yellow';
  
   }

  

   @HostListener('mouseenter') onMouseEnter(){
    this.ref.nativeElement.style.backgroundColor = 'green';
    //  this.highlight('red');
   }

   @HostListener('mouseleave') onMouseLeave(){
    let eve=this.ref.nativeElement;
    eve.style.backgroundColor = 'red';
    eve.style.color='blue';
    this.highlight('50px');
    
    // this.highlight('20s')
   }
   private highlight(fontSize: string  ) {
    this.ref.nativeElement.style.fontSize = fontSize;
    // this.ref.nativeElement.style.transitiondelay= delay;
  }

   
}

























