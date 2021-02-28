import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OmalleyPage } from './omalley.page';

describe('OmalleyPage', () => {
  let component: OmalleyPage;
  let fixture: ComponentFixture<OmalleyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmalleyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OmalleyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
