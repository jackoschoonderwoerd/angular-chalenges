import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user-service/user.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ServicesDocumentationComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        ServicesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService,
        LocalStorageService,
        { provide: 'LocalStorage', useValue: window.localStorage }
    ]
})
export class ServicesModule { }
