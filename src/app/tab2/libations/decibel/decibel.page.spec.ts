import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecibelPage } from './decibel.page';

describe('DecibelPage', () => {
  let component: DecibelPage;
  let fixture: ComponentFixture<DecibelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecibelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecibelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
