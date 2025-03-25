import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTaskManagerComponent } from './ngrx-task-manager.component';

describe('NgrxTaskManagerComponent', () => {
  let component: NgrxTaskManagerComponent;
  let fixture: ComponentFixture<NgrxTaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxTaskManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
