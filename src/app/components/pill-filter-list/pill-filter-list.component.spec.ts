import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFilterListComponent } from './pill-filter-list.component';

describe('PillFilterListComponent', () => {
  let component: PillFilterListComponent;
  let fixture: ComponentFixture<PillFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillFilterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
