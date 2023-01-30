import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() public title = '';
    @Input() public subTitle = '';
    @Input() public iconClasses = '';
    @Input() public topics: string[] = [];
    @Input() public purpose: string = ''
    @Input() public lesson: string = '';
}
