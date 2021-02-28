import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmericanPage } from './american.page';

describe('AmericanPage', () => {
  let component: AmericanPage;
  let fixture: ComponentFixture<AmericanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmericanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
