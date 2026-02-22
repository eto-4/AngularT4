import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pais2 } from './pais2';

describe('Pais2', () => {
  let component: Pais2;
  let fixture: ComponentFixture<Pais2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pais2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pais2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
