import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';

const routes: Routes = [
    {
        path: 'components',
        loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
    },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
    },
    {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule)
    },
    {
        path: 'services',
        loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule)
    },
    {
        path: 'other',
        loadChildren: () => import('./other/other.module').then((m) => m.OtherModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
