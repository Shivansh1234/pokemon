import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElevation]'
})
export class ElevationDirective implements OnChanges {

  defaultElevation = 2;
  raisedElevation = 5;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.elevation(this.raisedElevation);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elevation(this.defaultElevation);
  }

  elevation(elevation: number) {
    // remove all elevation classes
    const classesToRemove = Array.from((<HTMLElement>this.el.nativeElement).classList).filter(c => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach((c) => {
      this.render.removeClass(this.el.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${elevation}`;
    this.render.addClass(this.el.nativeElement, newClass);
  }

  ngOnChanges(): void {
    this.elevation(this.defaultElevation);
  }

}
