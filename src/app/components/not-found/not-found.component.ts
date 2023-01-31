import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
    private redirectCount = 10;

    constructor(public router: Router) { }

    ngOnInit(): void {

        setInterval(() => {
            this.redirectCount--;
            if (this.redirectCount <= 0) {
                this.router.navigate([''])
            }
        }, 1000)
    }

    public get redirectMessage(): string {
        if (this.redirectCount <= 0) {
            this.redirectCount = 10;
            return 'Redirecting ...'

        }
        return `Redirectig you to home page in ${this.redirectCount} seconds`
    }
}
