import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrostrvPage } from './frostrv.page';

describe('FrostrvPage', () => {
  let component: FrostrvPage;
  let fixture: ComponentFixture<FrostrvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostrvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrostrvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
