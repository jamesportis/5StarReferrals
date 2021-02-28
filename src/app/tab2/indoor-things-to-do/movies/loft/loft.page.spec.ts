import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoftPage } from './loft.page';

describe('LoftPage', () => {
  let component: LoftPage;
  let fixture: ComponentFixture<LoftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
