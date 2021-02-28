import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampingPage } from './camping.page';

describe('CampingPage', () => {
  let component: CampingPage;
  let fixture: ComponentFixture<CampingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
