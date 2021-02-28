import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarchettiPage } from './marchetti.page';

describe('MarchettiPage', () => {
  let component: MarchettiPage;
  let fixture: ComponentFixture<MarchettiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchettiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarchettiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
