import { Directive, Renderer, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[cc]'
})
export class ColorChanger{
    constructor(ef:ElementRef, ren: Renderer, eff:ElementRef, renn: Renderer){
         ren.setElementStyle(ef.nativeElement, 'backgroundColor', 'teal')
         renn.setElementStyle(eff.nativeElement, 'color', 'teal')
     }
    
    private defaultcolor = 'white'
    @HostListener('mouseenter')
    addColor(){
        this.defaultcolor = 'pink'
    }
    @HostListener('mouseleave')
    removeColor(){
        this.defaultcolor = 'white'
    }
    @HostBinding('style.backgroundColor')
    get applyStyle(){
        return this.defaultcolor;
    }
}