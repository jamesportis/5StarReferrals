import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElvirasPage } from './elviras.page';

describe('ElvirasPage', () => {
  let component: ElvirasPage;
  let fixture: ComponentFixture<ElvirasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvirasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElvirasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
