import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcateComponent } from './editcate.component';

describe('EditcateComponent', () => {
  let component: EditcateComponent;
  let fixture: ComponentFixture<EditcateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
