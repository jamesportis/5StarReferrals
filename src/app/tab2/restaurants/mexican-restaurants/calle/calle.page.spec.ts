import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallePage } from './calle.page';

describe('CallePage', () => {
  let component: CallePage;
  let fixture: ComponentFixture<CallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
