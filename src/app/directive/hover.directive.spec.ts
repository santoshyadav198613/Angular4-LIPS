import { HoverDirective } from './hover.directive';
import { ElementRef, Renderer } from '@angular/core';
describe('HoverDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    let render: Renderer;
    const directive = new HoverDirective(el, render);
    expect(directive).toBeTruthy();
  });
});
