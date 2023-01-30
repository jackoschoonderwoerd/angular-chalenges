import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent {
    @Input() public counter = 0
    @Input() public min = 0;
    @Input() public max = Number.MAX_SAFE_INTEGER

    public minusOne() {
        if (this.min < this.counter) {
            this.counter--;
        }
    }
    public plusOne() {
        if (this.max > this.counter) {
            this.counter++
        }
    }
}
