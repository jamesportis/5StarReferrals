import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HifiPage } from './hifi.page';

describe('HifiPage', () => {
  let component: HifiPage;
  let fixture: ComponentFixture<HifiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HifiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
