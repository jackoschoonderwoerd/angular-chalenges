import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user-service/user.service';


@NgModule({
    declarations: [
        ServicesDocumentationComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        ServicesRoutingModule,
    ],
    providers: [UserService]
})
export class ServicesModule { }
