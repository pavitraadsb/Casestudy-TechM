import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincardtypeComponent } from './admincardtype.component';

describe('AdmincardtypeComponent', () => {
  let component: AdmincardtypeComponent;
  let fixture: ComponentFixture<AdmincardtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincardtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincardtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
