import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalinaPage } from './catalina.page';

describe('CatalinaPage', () => {
  let component: CatalinaPage;
  let fixture: ComponentFixture<CatalinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
