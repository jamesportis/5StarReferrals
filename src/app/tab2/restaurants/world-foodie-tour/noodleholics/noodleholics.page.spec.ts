import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoodleholicsPage } from './noodleholics.page';

describe('NoodleholicsPage', () => {
  let component: NoodleholicsPage;
  let fixture: ComponentFixture<NoodleholicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoodleholicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoodleholicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
