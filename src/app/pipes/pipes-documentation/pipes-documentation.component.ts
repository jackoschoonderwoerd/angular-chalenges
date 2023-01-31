import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes-documentation',
    templateUrl: './pipes-documentation.component.html',
    styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent {

    // 71 Sort by Key Pipe
    public objectArray: { [key: string]: string; }[] = [
        { content: 'Courses' },
        { content: 'Youtube' },
        { content: 'Twitter' },
        { content: 'LinkedIn' },
    ]
    // 70 Sort By
    public stringArray: string[] = ['Courses', 'YouTube', 'LinkedIn', 'Twitter'];
    // public stringArray = 'Courses'

    // 69 Rich Text Pipe
    public html = 'a href="https://www.YouTube.com/Codingtutorials360" target="blank">Youtube</a>';

    public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

    public modifyFlatten(): void {
        this.flattenData.push(3, 5);
    }
    public reassignFlatten(): void {
        this.flattenData = [...this.flattenData]
    }

}
