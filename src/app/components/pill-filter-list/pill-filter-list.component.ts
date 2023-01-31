import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pill-filter-list',
    templateUrl: './pill-filter-list.component.html',
    styleUrls: ['./pill-filter-list.component.scss']
})
export class PillFilterListComponent {

    private pillLabels: string[];

    @Input() set pills(value: string[]) {
        this.pillLabels = value;
        this.unselectedPills = value;
    }

    public unselectedPills: string[] = [];
    public selectedPills: string[] = [];

    public selected = new EventEmitter<string[]>();

    public addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
        if (pillDetails.hasBeenSelected) {
            const selectedIndex = this.unselectedPills.indexOf(pillDetails.label)
            const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1)
            this.selectedPills.push(selectedPill)
            this.selected.emit(this.selectedPills)
        }
    }
    public removeFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
        if (!pillDetails.hasBeenSelected) {
            const selectedIndex = this.selectedPills.indexOf(pillDetails.label)
            const [unselectedPill] = this.selectedPills.splice(selectedIndex, 1)
            this.unselectedPills.push(unselectedPill)
        }
    }
}
