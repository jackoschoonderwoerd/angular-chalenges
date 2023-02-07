import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';

const routes: Routes = [
    { path: '', component: ServicesDocumentationComponent },
    { path: ':id', component: ServicesDocumentationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
