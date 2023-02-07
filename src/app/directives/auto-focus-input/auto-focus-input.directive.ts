import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appAutoFocusInput]'
})
export class AutoFocusInputDirective implements AfterContentInit {

    constructor(public el: ElementRef<HTMLInputElement>) { }

    public ngAfterContentInit(): void {
        setTimeout(() => {
            this.el.nativeElement.focus()
        }, 250);
    }


    // constructor() { }

}
