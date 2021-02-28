import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StreetcarPage } from './streetcar.page';

describe('StreetcarPage', () => {
  let component: StreetcarPage;
  let fixture: ComponentFixture<StreetcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetcarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StreetcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
