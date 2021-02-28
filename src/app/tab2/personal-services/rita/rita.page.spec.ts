import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RitaPage } from './rita.page';

describe('RitaPage', () => {
  let component: RitaPage;
  let fixture: ComponentFixture<RitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
