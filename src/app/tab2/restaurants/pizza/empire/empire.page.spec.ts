import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpirePage } from './empire.page';

describe('EmpirePage', () => {
  let component: EmpirePage;
  let fixture: ComponentFixture<EmpirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
