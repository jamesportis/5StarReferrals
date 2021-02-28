import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndoorThingsToDoPage } from './indoor-things-to-do.page';

describe('IndoorThingsToDoPage', () => {
  let component: IndoorThingsToDoPage;
  let fixture: ComponentFixture<IndoorThingsToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorThingsToDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndoorThingsToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
