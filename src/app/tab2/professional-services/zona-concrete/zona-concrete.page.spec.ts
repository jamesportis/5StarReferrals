import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZonaConcretePage } from './zona-concrete.page';

describe('ZonaConcretePage', () => {
  let component: ZonaConcretePage;
  let fixture: ComponentFixture<ZonaConcretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaConcretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZonaConcretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
