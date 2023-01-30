import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    public snackbar$ = new Subject<string>();

    constructor() { }

    public callSnackbar(message: string): void {
        console.log(`${message} from snackbar.service.ts`)
        this.snackbar$.next(message);
    }
}
