import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenComponentComponent } from './templatedriven-component.component';

describe('TemplatedrivenComponentComponent', () => {
  let component: TemplatedrivenComponentComponent;
  let fixture: ComponentFixture<TemplatedrivenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedrivenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrivenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
