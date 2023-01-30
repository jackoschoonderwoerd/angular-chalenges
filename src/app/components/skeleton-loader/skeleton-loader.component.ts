import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
    @Input() public width: string = '100%';
    @Input() public height: string = '100%';

    public get dimensions() {
        return {
            witdh: this.width, height: this.height
        }
    }


}
