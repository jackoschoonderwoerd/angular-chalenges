import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
    @Input() public tableData: any[] = [
        { first: 'Dylan 1', age: '31', dob: '10/25/91' },
        { first: 'Dylan 2', age: '30', dob: '10/25/90' },
        { first: 'Dylan 3', age: '32', dob: '10/25/89' },
        { first: 'Dylan 4', age: '28', dob: '10/25/88' },
        { first: 'Dylan 5', age: '35', dob: '10/25/87' }
    ];
    @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

    public headerSelection(key: string, value: any): void {
        this.headerSelected.emit({ value, key })
    }

}
