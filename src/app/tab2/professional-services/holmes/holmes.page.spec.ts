import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolmesPage } from './holmes.page';

describe('HolmesPage', () => {
  let component: HolmesPage;
  let fixture: ComponentFixture<HolmesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolmesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
