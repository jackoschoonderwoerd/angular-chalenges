import { Component, OnInit } from '@angular/core';

import { TitleService } from './services/title/title.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(public titleService: TitleService) { }

    public ngOnInit(): void {
        this.titleService.initializeTitleService();
    }

    // title = 'angular-chalenges';

    title = 'angular-chalenges'
}
