import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-banner-cut-out',
    templateUrl: './banner-cut-out.component.html',
    styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent {
    @Input() public imageUrl = 'https://images.unsplash.com/photo-1674718021994-8eb458a88ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    @Input() public title = "100 Angular Chalenge"
}
