import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaijinPage } from './raijin.page';

describe('RaijinPage', () => {
  let component: RaijinPage;
  let fixture: ComponentFixture<RaijinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaijinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaijinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
