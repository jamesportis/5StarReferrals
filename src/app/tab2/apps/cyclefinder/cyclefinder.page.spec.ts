import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CyclefinderPage } from './cyclefinder.page';

describe('CyclefinderPage', () => {
  let component: CyclefinderPage;
  let fixture: ComponentFixture<CyclefinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclefinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CyclefinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
