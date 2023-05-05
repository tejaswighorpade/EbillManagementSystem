import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrformComponent } from './csrform.component';

describe('CsrformComponent', () => {
  let component: CsrformComponent;
  let fixture: ComponentFixture<CsrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
