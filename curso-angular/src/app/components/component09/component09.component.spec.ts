import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component09Component } from './component09.component';

describe('Component09Component', () => {
  let component: Component09Component;
  let fixture: ComponentFixture<Component09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
