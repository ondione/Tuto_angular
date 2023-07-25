import { Directive, ElementRef, HostListener  } from '@angular/core';

import { UtilsService } from '../utils/utils.service';

@Directive({
  selector: '[appMenuItems]'
})
export class MenuItemsDirective {
  constructor( private elementRef:ElementRef, private util:UtilsService) { }

  @HostListener('click', ['$event.target']) onClick(event: HTMLElement) {
    var clickedElement = event.attributes.getNamedItem("ng-reflect-router-link")?.value,
        navBarSelector = this.getSelector('#navbar');
    clickedElement = ( clickedElement !== "" ) ? clickedElement: "home";
   
    const newLocal = event.classList.contains('navbar-mobile');
    if((event.classList.contains("scrollto") || newLocal) && clickedElement) {

      if(navBarSelector.classList.contains('navbar-mobile')) {
        let navbarToggle = this.getSelector('.mobile-nav-toggle');
        this.util.addOrRemoveClass(navBarSelector, 'navbar-mobile', 'remove');
        this.util.addOrRemoveClass(navbarToggle, ['bi-list','bi-x'], 'toggle');
      }
      this.util.scrollToElementById(clickedElement);

    } else if (event.classList.contains("mobile-nav-toggle")) {
      this.util.addOrRemoveClass(event, ['bi-list','bi-x'], 'toggle');
      this.util.addOrRemoveClass(navBarSelector, 'navbar-mobile', 'toggle');
    }else{

      let anchor = event.attributes.getNamedItem("href")?.value;
      if(anchor && anchor?.indexOf("#") > -1){
        console.log(anchor , " lien a scroller")
        this.util.scrollToElementById(anchor.substring(1));
      }
    }
  }

  private getSelector(selector: string) {
    return this.elementRef.nativeElement.querySelector(selector);
  }
}
