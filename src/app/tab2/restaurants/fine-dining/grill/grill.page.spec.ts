import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrillPage } from './grill.page';

describe('GrillPage', () => {
  let component: GrillPage;
  let fixture: ComponentFixture<GrillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
