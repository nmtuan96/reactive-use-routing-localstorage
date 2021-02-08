import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStringName]'
})
export class StringNameDirective {

  constructor(private ele: ElementRef) { }

  key: any;
  @HostListener('keydown', ['$event'])onInputChange(event: KeyboardEvent){
    debugger;
      this.key= event.keyCode;
      if((this.key >= 15 && this.key <= 63) && this.key != 32 || this.key >=123 || 
        (this.key >= 96 && this.key <= 110) ){
          event.preventDefault();
        }
  }
}
