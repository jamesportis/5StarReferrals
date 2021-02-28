import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlyingPage } from './flying.page';

describe('FlyingPage', () => {
  let component: FlyingPage;
  let fixture: ComponentFixture<FlyingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlyingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
