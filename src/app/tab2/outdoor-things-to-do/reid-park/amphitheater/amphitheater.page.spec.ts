import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmphitheaterPage } from './amphitheater.page';

describe('AmphitheaterPage', () => {
  let component: AmphitheaterPage;
  let fixture: ComponentFixture<AmphitheaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphitheaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmphitheaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
