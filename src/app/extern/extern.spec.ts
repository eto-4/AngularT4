import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extern } from './extern';

describe('Extern', () => {
  let component: Extern;
  let fixture: ComponentFixture<Extern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
