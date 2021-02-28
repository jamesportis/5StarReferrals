import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndianTwistPage } from './indian-twist.page';

describe('IndianTwistPage', () => {
  let component: IndianTwistPage;
  let fixture: ComponentFixture<IndianTwistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianTwistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianTwistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
