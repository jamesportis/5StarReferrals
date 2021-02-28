import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharroSteakPage } from './charro-steak.page';

describe('CharroSteakPage', () => {
  let component: CharroSteakPage;
  let fixture: ComponentFixture<CharroSteakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharroSteakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharroSteakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
