import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GolfPage } from './golf.page';

describe('GolfPage', () => {
  let component: GolfPage;
  let fixture: ComponentFixture<GolfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GolfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
