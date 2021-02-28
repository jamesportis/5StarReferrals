import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TumamocPage } from './tumamoc.page';

describe('TumamocPage', () => {
  let component: TumamocPage;
  let fixture: ComponentFixture<TumamocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumamocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TumamocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
