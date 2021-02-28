import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BMPage } from './b-m.page';

describe('BMPage', () => {
  let component: BMPage;
  let fixture: ComponentFixture<BMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
