import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cotxes } from './cotxes';

describe('Cotxes', () => {
  let component: Cotxes;
  let fixture: ComponentFixture<Cotxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cotxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cotxes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
