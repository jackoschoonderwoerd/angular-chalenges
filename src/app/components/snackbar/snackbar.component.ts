import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
    @Input() public message = '';
    public isShown = false;

    constructor(public snackbarService: SnackbarService) { }

    ngOnInit(): void {
        console.log(`look alive ${this.message}`)
        this.snackbarService.snackbar$.subscribe((message: string) => {
            console.log(`${message} from snackbar.component.ts ngOnInit()`)
            this.showMessage(message);
        })
    }

    public showMessage(message: string): void {
        console.log(`MESSAGE: ${this.message} from snackbar.component.ts showMessage()`);
        this.isShown = true;
        if (message) {
            this.message = message
        }

        const subscription = of(null).pipe(delay(2900)).subscribe({
            complete: () => {
                console.log(`showMessage() complete`)
                this.isShown = false
                subscription.unsubscribe();
            }
        })
    }

}
