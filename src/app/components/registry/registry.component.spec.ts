import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RegistryComponent } from './registry.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RegistryComponent', () => {
  let fixture: ComponentFixture<RegistryComponent>;
  let component: RegistryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RegistryComponent]
    });

    fixture = TestBed.createComponent(RegistryComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });
});
