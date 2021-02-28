import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlueHousePage } from './blue-house.page';

describe('BlueHousePage', () => {
  let component: BlueHousePage;
  let fixture: ComponentFixture<BlueHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlueHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
