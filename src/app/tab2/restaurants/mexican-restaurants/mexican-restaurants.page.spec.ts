import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MexicanRestaurantsPage } from './mexican-restaurants.page';

describe('MexicanRestaurantsPage', () => {
  let component: MexicanRestaurantsPage;
  let fixture: ComponentFixture<MexicanRestaurantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicanRestaurantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MexicanRestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
