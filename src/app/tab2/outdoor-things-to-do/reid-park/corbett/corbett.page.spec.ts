import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorbettPage } from './corbett.page';

describe('CorbettPage', () => {
  let component: CorbettPage;
  let fixture: ComponentFixture<CorbettPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorbettPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorbettPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
