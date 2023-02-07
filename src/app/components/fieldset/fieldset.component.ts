import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-fieldset',
    templateUrl: './fieldset.component.html',
    styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent {
    @Input() legend = '';
    @Input() isOpen = false;

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
