import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WallacePage } from './wallace.page';

describe('WallacePage', () => {
  let component: WallacePage;
  let fixture: ComponentFixture<WallacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WallacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
