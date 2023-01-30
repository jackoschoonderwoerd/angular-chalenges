import { Routes, RouterModule } from '@angular/router';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { NgModule } from '@angular/core';
import { FormDirtyGuard } from './guards/form-dirty/form-dirty.guard';

const routes: Routes = [
    { path: '', component: OtherDocumentationComponent, canDeactivate: [FormDirtyGuard] }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OtherDocumentationRoutingModule { }
