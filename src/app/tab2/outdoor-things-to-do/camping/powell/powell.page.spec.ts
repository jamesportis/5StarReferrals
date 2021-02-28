import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PowellPage } from './powell.page';

describe('PowellPage', () => {
  let component: PowellPage;
  let fixture: ComponentFixture<PowellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PowellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
