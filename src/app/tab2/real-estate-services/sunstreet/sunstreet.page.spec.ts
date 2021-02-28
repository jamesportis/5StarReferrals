import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SunstreetPage } from './sunstreet.page';

describe('SunstreetPage', () => {
  let component: SunstreetPage;
  let fixture: ComponentFixture<SunstreetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunstreetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SunstreetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
