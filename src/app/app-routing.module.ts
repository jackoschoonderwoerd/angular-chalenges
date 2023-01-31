import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        data: { title: 'Components' },
        path: '',
        loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
    },
    {
        data: { title: 'Components' },
        path: 'components',
        loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
    },
    {
        data: { title: 'Directives' },
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
    },
    {
        data: { title: 'Pipes' },
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule)
    },
    {
        data: { title: 'Services' },
        path: 'services',
        loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule)
    },
    {
        data: { title: 'Other' },
        path: 'other',
        loadChildren: () => import('./other/other.module').then((m) => m.OtherModule)
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
