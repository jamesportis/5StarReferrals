import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorldFoodieTourPage } from './world-foodie-tour.page';

describe('WorldFoodieTourPage', () => {
  let component: WorldFoodieTourPage;
  let fixture: ComponentFixture<WorldFoodieTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldFoodieTourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorldFoodieTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
