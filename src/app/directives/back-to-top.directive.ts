import { Directive, ElementRef, HostListener } from '@angular/core';
import { UtilsService } from '../utils/utils.service';

@Directive({
  selector: '[appBackToTop]'
})
export class BackToTopDirective {

  constructor(
    private elRef: ElementRef, 
    private util: UtilsService
  ) { }

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    var selectHeader = this.getSelector('#header'),
      selectTopbar = this.getSelector('#topbar'),
      arrowUp = this.getSelector('.bi-arrow-up-short'),
      backTopSelector = this.getSelector('.back-to-top');

    if ($event) {
      $event.preventDefault();

      if (backTopSelector && window.scrollY > 100) {

        this.util.addOrRemoveClass(backTopSelector, ['active', 'scrollto'], 'add');
        this.util.addOrRemoveClass(arrowUp, 'scrollto', 'add');
        this.util.addOrRemoveClass(selectHeader, 'header-scrolled', 'add');

        selectTopbar && this.util.addOrRemoveClass(selectTopbar, 'topbar-scrolled', 'add');

        backTopSelector.addEventListener('click', (evt: Event): any => {
          evt.preventDefault();
          this.util.addOrRemoveClass(selectHeader, 'header-scrolled', 'remove');
          this.util.addOrRemoveClass(selectTopbar, 'topbar-scrolled', 'remove');
          this.util.addOrRemoveClass(backTopSelector, ['active', 'scrollto'], 'remove');
          this.util.addOrRemoveClass(arrowUp, 'scrollto', 'remove');
          this.util.scrollToElementById('topbar');
        }, true);

      } else {
        this.util.addOrRemoveClass(backTopSelector, ['active', 'scrollto'], 'remove');
        this.util.addOrRemoveClass(arrowUp, 'scrollto', 'remove');
        this.util.addOrRemoveClass(selectHeader, 'header-scrolled', 'remove');

        selectTopbar && this.util.addOrRemoveClass(selectTopbar, 'topbar-scrolled', 'remove');
      }
      backTopSelector?.removeEventListener('click', null);arrowUp?.removeEventListener('click', null);
    }
  }
  private getSelector(selector: string) {
    return this.elRef.nativeElement.querySelector(selector);
  }
}