import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaynardsPage } from './maynards.page';

describe('MaynardsPage', () => {
  let component: MaynardsPage;
  let fixture: ComponentFixture<MaynardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaynardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaynardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
