import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoiloComponent } from './portfoilo.component';

describe('PortfoiloComponent', () => {
  let component: PortfoiloComponent;
  let fixture: ComponentFixture<PortfoiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
