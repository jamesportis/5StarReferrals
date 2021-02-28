import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RootsourcePage } from './rootsource.page';

describe('RootsourcePage', () => {
  let component: RootsourcePage;
  let fixture: ComponentFixture<RootsourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootsourcePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RootsourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
