import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaLongPage } from './ha-long.page';

describe('HaLongPage', () => {
  let component: HaLongPage;
  let fixture: ComponentFixture<HaLongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaLongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaLongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
