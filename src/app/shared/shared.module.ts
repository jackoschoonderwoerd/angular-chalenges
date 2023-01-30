import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../components/card/card.component';
import { SharedMaterialModule } from './shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabComponent } from '../components/tab/tab.component';





@NgModule({
    declarations: [
        CardComponent,
        SnackbarComponent,
        TabComponent
    ],
    exports: [
        SnackbarComponent,
        CardComponent,
        TabComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        // BrowserAnimationsModule,
        // FormsModule,
        // ReactiveFormsModule


    ],
})
export class SharedModule { }
