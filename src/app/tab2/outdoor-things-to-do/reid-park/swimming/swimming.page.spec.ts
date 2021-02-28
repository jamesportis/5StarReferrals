import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwimmingPage } from './swimming.page';

describe('SwimmingPage', () => {
  let component: SwimmingPage;
  let fixture: ComponentFixture<SwimmingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwimmingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
