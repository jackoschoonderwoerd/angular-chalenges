import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { OtherDocumentationRoutingModule } from './other-documentation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        OtherDocumentationComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        OtherDocumentationRoutingModule,
    ]
})
export class OtherModule { }
