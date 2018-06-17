import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotCardComponent } from './spotcard.component';

describe('SpotcardComponent', () => {
  let component: SpotCardComponent;
  let fixture: ComponentFixture<SpotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
