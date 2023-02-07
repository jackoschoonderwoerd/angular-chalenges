import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class CalcService {

    constructor(private sharedService: SharedService) { }

    public multiply(a: number, b: number): number {
        this.sharedService.mySharedFunction();
        return a * b;
    }
}
