import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZemamsPage } from './zemams.page';

describe('ZemamsPage', () => {
  let component: ZemamsPage;
  let fixture: ComponentFixture<ZemamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemamsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZemamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
