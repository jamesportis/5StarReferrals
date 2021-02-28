import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutdoorThingsToDoPage } from './outdoor-things-to-do.page';

describe('OutdoorThingsToDoPage', () => {
  let component: OutdoorThingsToDoPage;
  let fixture: ComponentFixture<OutdoorThingsToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorThingsToDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutdoorThingsToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
