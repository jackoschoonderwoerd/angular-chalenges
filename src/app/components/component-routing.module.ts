import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';

const routes: Routes = [
    {
        path: '', component: ComponentDocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
