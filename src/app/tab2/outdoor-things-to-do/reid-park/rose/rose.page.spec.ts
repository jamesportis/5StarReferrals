import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RosePage } from './rose.page';

describe('RosePage', () => {
  let component: RosePage;
  let fixture: ComponentFixture<RosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
