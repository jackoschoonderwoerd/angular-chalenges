import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormDirty } from '../guards/form-dirty/form-dirty-.interface';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animations';

@Component({
    selector: 'app-other-documentation',
    templateUrl: './other-documentation.component.html',
    styleUrls: ['./other-documentation.component.scss'],
    animations: [fadeInOutAnimation, slideRightAnimation]

})
export class OtherDocumentationComponent implements IFormDirty {
    public isInDOM = true;
    public form: FormGroup;
    selectedTab = 0
    public tabs: {
        title: string, active: boolean
    }[] = [
            { title: 'Tab 1', active: true },
            { title: 'Tab 2', active: false }
        ]

    constructor(private formBuilder: FormBuilder) {
        this.initializeForm()
    }

    public toggle(): void {
        this.isInDOM = !this.isInDOM;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            name: new FormControl(null, [Validators.required, Validators.minLength(2)])
        })
    }
    onSubmit() {
        this.form.reset(this.form.value);
        console.log(this.form.value)
    }

}
