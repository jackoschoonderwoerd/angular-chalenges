import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';
import { CopyDirective } from './copy/copy.directive';
import { LazyLoadImageDirective } from './lazy-load-image/lazy-load-image.directive';


@NgModule({
    declarations: [
        DebounceClickDirective,
        DirectivesDocumentationComponent,
        RippleDirective,
        ScaleDirective,
        CopyDirective,
        LazyLoadImageDirective
    ],
    imports: [
        CommonModule,
        SharedModule,
        DirectivesRoutingModule,
    ],
    providers: [
        { provide: 'Navigator', useValue: navigator },
        { provide: 'Document', useValue: document },
        { provide: 'Window', useValue: window }
    ]
})
export class DirectivesModule { }
