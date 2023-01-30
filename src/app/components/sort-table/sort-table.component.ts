import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sort-table',
    templateUrl: './sort-table.component.html',
    styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent {

    @Input() public tableData = [
        { first: 'Dylan 1', living: false, age: 331, dob: '10/25/91' },
        { first: 'Dylan 2', living: true, age: 30, dob: '10/25/90' },
        { first: 'Dylan 3', living: true, age: 32, dob: '10/23/89' },
        { first: 'Dylan 4', living: false, age: 28, dob: '10/25/88' },
        { first: 'Dylan 5', living: false, age: 35, dob: '10/25/87' }
    ]


    public sortDirection = true

    public sort(headerData: { key: string, value: any }) {
        console.log(headerData);
        const { key, value } = headerData;
        this.sortDirection = !this.sortDirection;
        switch (true) {
            case typeof value === 'boolean':
                this.sortBoolean(key)
                break;
            case typeof value === 'number':
                this.sortNumber(key)
                break;
            case this.isDate(value):
                this.sortDate(key)
                break;
            case typeof value === 'string':
                this.sortString(key)
                break;
        }
    }


    private isDate(value: any): boolean {
        const parsedDate = Date.parse(value);
        return isNaN(value) && !isNaN(parsedDate);
    }
    private sortDate(key: any): void {
        this.tableData.sort((value1: any, value2: any) => {
            if (this.sortDirection) {
                return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
            } else {
                return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
            }
        })
    }

    private sortBoolean(key: string): void {
        this.tableData.sort((value1: any, value2: any) => {
            if (this.sortDirection) {
                return Number(value1[key]) - Number(value2[key])
            } else {
                return Number(value2[key]) - Number(value1[key])
            }
        })
    }

    private sortNumber(key: string): void {
        this.tableData.sort((value1: any, value2: any) => {
            if (this.sortDirection) {
                return Number(value1[key]) - Number(value2[key])
            } else {
                return Number(value2[key]) - Number(value1[key])
            }
        })
    }
    private sortString(key: string): void {
        this.tableData.sort((value1: any, value2: any) => {
            const value1Uppercased = value1[key].toUpperCase();
            const value2Uppercased = value2[key].toUpperCase();
            if (this.sortDirection) {
                if (value1Uppercased > value2Uppercased) {
                    return -1;
                }
                if (value2Uppercased > value1Uppercased) {
                    return 1
                }
                return 0
            } else {
                if (value2Uppercased > value1Uppercased) {
                    return -1;
                }
                if (value1Uppercased > value2Uppercased) {
                    return 1
                }
                return 0
            }
        })
    }

}
