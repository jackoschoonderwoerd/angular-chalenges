import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    @Input() public quote: string = '';
    @Input() public author: string = '';
    @Input() public occupation: string = '';
}
