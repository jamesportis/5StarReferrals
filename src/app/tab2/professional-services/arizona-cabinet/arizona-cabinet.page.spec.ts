import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArizonaCabinetPage } from './arizona-cabinet.page';

describe('ArizonaCabinetPage', () => {
  let component: ArizonaCabinetPage;
  let fixture: ComponentFixture<ArizonaCabinetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArizonaCabinetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArizonaCabinetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
