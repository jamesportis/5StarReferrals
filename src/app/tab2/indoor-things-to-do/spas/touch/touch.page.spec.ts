import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TouchPage } from './touch.page';

describe('TouchPage', () => {
  let component: TouchPage;
  let fixture: ComponentFixture<TouchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TouchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
