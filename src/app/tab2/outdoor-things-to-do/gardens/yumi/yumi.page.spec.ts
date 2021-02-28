import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YumiPage } from './yumi.page';

describe('YumiPage', () => {
  let component: YumiPage;
  let fixture: ComponentFixture<YumiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YumiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YumiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
