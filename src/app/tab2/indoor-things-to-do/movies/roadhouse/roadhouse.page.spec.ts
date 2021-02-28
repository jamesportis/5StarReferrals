import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoadhousePage } from './roadhouse.page';

describe('RoadhousePage', () => {
  let component: RoadhousePage;
  let fixture: ComponentFixture<RoadhousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadhousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
