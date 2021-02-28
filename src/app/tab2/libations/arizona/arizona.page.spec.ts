import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArizonaPage } from './arizona.page';

describe('ArizonaPage', () => {
  let component: ArizonaPage;
  let fixture: ComponentFixture<ArizonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArizonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArizonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
