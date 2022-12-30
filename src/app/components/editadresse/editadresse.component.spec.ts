import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadresseComponent } from './editadresse.component';

describe('EditadresseComponent', () => {
  let component: EditadresseComponent;
  let fixture: ComponentFixture<EditadresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadresseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
