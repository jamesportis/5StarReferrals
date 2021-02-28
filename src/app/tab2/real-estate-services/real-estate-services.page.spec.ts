import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealEstateServicesPage } from './real-estate-services.page';

describe('RealEstateServicesPage', () => {
  let component: RealEstateServicesPage;
  let fixture: ComponentFixture<RealEstateServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealEstateServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
