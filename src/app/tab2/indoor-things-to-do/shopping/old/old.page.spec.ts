import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OldPage } from './old.page';

describe('OldPage', () => {
  let component: OldPage;
  let fixture: ComponentFixture<OldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
