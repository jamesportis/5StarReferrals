import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReidParkPage } from './reid-park.page';

describe('ReidParkPage', () => {
  let component: ReidParkPage;
  let fixture: ComponentFixture<ReidParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReidParkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReidParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
