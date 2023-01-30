import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { IFormDirty } from './form-dirty-.interface';

@Injectable({
    providedIn: 'root'
})

export class FormDirtyGuard implements CanDeactivate<IFormDirty> {
    public canDeactivate(component: IFormDirty): boolean {
        if (component.form.get('name').touched) {
            return confirm('Your form is dirty, are you sure you want to leave?');
        }
        return true;
    }
}
