import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() public tabs: { title: string, active: boolean }[] = [];
    @Output() public selectedTabIndex = new EventEmitter<number>();

    public selectTab(selected: { title: string, active: boolean }, index: number): void {
        this.tabs.forEach((tab) => {
            tab.active = (selected === tab);
        })
        this.selectedTabIndex.emit(index)
    }
}
