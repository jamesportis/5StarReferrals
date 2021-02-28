import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenaePage } from './senae.page';

describe('SenaePage', () => {
  let component: SenaePage;
  let fixture: ComponentFixture<SenaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
