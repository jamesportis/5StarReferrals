import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADTPage } from './adt.page';

describe('ADTPage', () => {
  let component: ADTPage;
  let fixture: ComponentFixture<ADTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
