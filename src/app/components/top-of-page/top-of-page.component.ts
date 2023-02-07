import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-of-page',
    templateUrl: './top-of-page.component.html',
    styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {

    public isShown = false

    constructor(private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {
        console.log(document.documentElement.clientHeight)
    }


    @HostListener('window:scroll') onWindowScroll() {
        const yCoordinate = this.viewportScroller.getScrollPosition()[1];
        this.isShown = yCoordinate > document.documentElement.clientHeight - 300;
    }

    public goToTop(): void {
        this.viewportScroller.scrollToPosition([0, 0]);
    }
}
