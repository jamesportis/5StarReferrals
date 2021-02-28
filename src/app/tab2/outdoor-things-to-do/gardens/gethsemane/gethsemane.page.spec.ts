import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GethsemanePage } from './gethsemane.page';

describe('GethsemanePage', () => {
  let component: GethsemanePage;
  let fixture: ComponentFixture<GethsemanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethsemanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GethsemanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
