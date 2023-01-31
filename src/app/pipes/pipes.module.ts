import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './creditCardFormatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';
import { RichTextPipe } from './rich-text/rich-text.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key/sort-by-key.pipe';






@NgModule({
    declarations: [
        PipesDocumentationComponent,
        TruncatePipe,
        CreditCardFormatterPipe,
        FlattenPipe,
        FilterTermPipe,
        RichTextPipe,
        SortByPipe,
        SortByKeyPipe,
    ],
    imports: [
        CommonModule,
        PipesRoutingModule,
        SharedModule
    ]
})
export class PipesModule { }
