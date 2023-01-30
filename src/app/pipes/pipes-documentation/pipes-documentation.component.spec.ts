import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDocumentationComponent } from './pipes-documentation.component';

describe('PipeDocumentationComponent', () => {
    let component: PipesDocumentationComponent;
    let fixture: ComponentFixture<PipesDocumentationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PipesDocumentationComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PipesDocumentationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
