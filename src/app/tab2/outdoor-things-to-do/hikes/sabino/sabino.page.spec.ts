import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SabinoPage } from './sabino.page';

describe('SabinoPage', () => {
  let component: SabinoPage;
  let fixture: ComponentFixture<SabinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SabinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
