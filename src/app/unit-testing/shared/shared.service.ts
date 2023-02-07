import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public mySharedFunction() {
        console.log('My shared function is called form shared.service.ts');
    }
}
