import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {
  private regex: RegExp =  new RegExp('^[1-9]?[0-9]{1}$|^100$');
  constructor(private ele: ElementRef) { }

  @HostListener('input', ['$event'])onInputChange(event){
    const initalValue = this.ele.nativeElement.value;
    this.ele.nativeElement.value = initalValue.replace(/[^0-9]*$/g, '');
    if ( initalValue !== this.ele.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
