import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdCardComponent } from './cd-card.component';

describe('CdCardComponent', () => {
  let component: CdCardComponent;
  let fixture: ComponentFixture<CdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
