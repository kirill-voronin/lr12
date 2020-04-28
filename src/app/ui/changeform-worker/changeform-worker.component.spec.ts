import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeformWorkerComponent } from './changeform-worker.component';

describe('ChangeformWorkerComponent', () => {
  let component: ChangeformWorkerComponent;
  let fixture: ComponentFixture<ChangeformWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeformWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeformWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
