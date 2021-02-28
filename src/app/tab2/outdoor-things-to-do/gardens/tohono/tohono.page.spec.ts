import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TohonoPage } from './tohono.page';

describe('TohonoPage', () => {
  let component: TohonoPage;
  let fixture: ComponentFixture<TohonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohonoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TohonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
