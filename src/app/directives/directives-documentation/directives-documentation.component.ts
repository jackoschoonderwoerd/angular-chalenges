import { Component } from '@angular/core';

@Component({
    selector: 'app-directives-documentation',
    templateUrl: './directives-documentation.component.html',
    styleUrls: ['./directives-documentation.component.scss']
})
export class DirectivesDocumentationComponent {

    public log(): void {
        console.log('Hello World');
    }
}
