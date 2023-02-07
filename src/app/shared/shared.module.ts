
import { CardComponent } from '../components/card/card.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedMaterialModule } from './shared-material.module';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabComponent } from '../components/tab/tab.component';
import { ModalComponent } from '../components/modal/modal.component';




@NgModule({
    declarations: [
        CardComponent,
        SnackbarComponent,
        TabComponent,
        ModalComponent
    ],
    exports: [
        SnackbarComponent,
        CardComponent,
        TabComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,


    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
})
export class SharedModule { }
