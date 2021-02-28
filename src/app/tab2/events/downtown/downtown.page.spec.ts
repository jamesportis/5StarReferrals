import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DowntownPage } from './downtown.page';

describe('DowntownPage', () => {
  let component: DowntownPage;
  let fixture: ComponentFixture<DowntownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DowntownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
