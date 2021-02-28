import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapsPage } from './caps.page';

describe('CapsPage', () => {
  let component: CapsPage;
  let fixture: ComponentFixture<CapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
