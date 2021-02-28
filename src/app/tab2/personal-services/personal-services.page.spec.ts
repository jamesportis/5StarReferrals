import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalServicesPage } from './personal-services.page';

describe('PersonalServicesPage', () => {
  let component: PersonalServicesPage;
  let fixture: ComponentFixture<PersonalServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
