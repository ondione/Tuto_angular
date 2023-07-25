import { Injectable, ElementRef , Inject  } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn:'root'
})
export class UtilsService{

    constructor(@Inject(DOCUMENT) private document: Document){}

    addOrRemoveClass = (selector:any, classArg:any, type:string) =>{
        var args = (typeof classArg == 'string') ? [classArg] : classArg ;
        switch(type){
            case 'add':{
                if(typeof selector == 'object' && selector.length > 1){
                    selector.forEach((item:any) => {
                        item.classList.add(...args);
                    });
                }else{
                  selector.classList.add(...args);
                }
                break;
            }
            case 'remove':{
                if(typeof selector == 'object' && selector.length > 1){
                    selector.forEach((item:any) => {
                        item?.classList?.remove(...args);
                    });
                }else{
                  selector.classList.remove(...args);
                }
                break;
            } 
            case 'toggle':{
                if(typeof selector == 'object'  && selector.length > 1){
                    selector.forEach((sel:any) => {
                        args.forEach((item:string) => {
                            sel?.classList.toggle(item);
                        });
                    });
                }else{
                    args.forEach((item:string) => {
                        selector.classList.toggle(item);
                    },selector);
                }
                break;
            }
        }
    }

    scrollToElementById = (id: string) => {
        const element = this.__getElementById(id);
        this.scrollToElement(element);
    } 

    private __getElementById(id: string): any {
        return  this.document.getElementById(id);
    }

    scrollToElement = (element: HTMLElement) => {
        let header = this.__getElementById('header');
        let offset = header.offsetHeight;
        console.log(element , ' recu')
        let elementPos = element.offsetTop;
        
        window.scrollTo({
            top: elementPos - offset - 100,
            behavior: 'smooth'
        })
    }
}


