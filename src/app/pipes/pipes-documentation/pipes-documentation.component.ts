import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-documentation',
    templateUrl: './pipes-documentation.component.html',
    styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent {

    public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

    public modifyFlatten(): void {
        this.flattenData.push(3, 5);
    }
    public reassignFlatten(): void {
        this.flattenData = [...this.flattenData]
    }

}
