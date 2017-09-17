import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  element: HTMLAnchorElement;
  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.background = 'red';
  }

  @HostListener('mouseout')  onmouseout() {
    this.el.nativeElement.style.background = 'blue';
  }

  // @HostListener('mouseenter') onmouseenter() {
  //       this.el.nativeElement.style.background = 'blue';
  // }

  @HostListener('click', ['$event']) onClick() {
    let ele = this.render.createElement(this.element, 'test');
    console.log(ele);
    this.el.nativeElement.style.background = 'yellow';
  }

  constructor(private el: ElementRef, private render: Renderer) {
    console.log(el);
    el.nativeElement.style.background = 'green';
  }

}
