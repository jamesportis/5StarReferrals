import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolishPage } from './polish.page';

describe('PolishPage', () => {
  let component: PolishPage;
  let fixture: ComponentFixture<PolishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
