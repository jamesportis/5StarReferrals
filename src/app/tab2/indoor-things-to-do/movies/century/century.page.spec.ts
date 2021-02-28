import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CenturyPage } from './century.page';

describe('CenturyPage', () => {
  let component: CenturyPage;
  let fixture: ComponentFixture<CenturyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenturyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CenturyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
