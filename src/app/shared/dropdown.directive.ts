import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // HostBinding binds the 'open' class to the host element based on the value of isOpen.
  @HostBinding('class.open') isOpen = false;


  // HostListener listens for click events on the host element.
  @HostListener('click', ['$event']) toggleOpen(event: Event) {
    // This checks if the clicked element is within the host element.
    // If it is, it toggles the isOpen property; otherwise, it sets isOpen to false.

    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }

}
