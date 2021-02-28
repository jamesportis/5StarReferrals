import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BustamontePage } from './bustamonte.page';

describe('BustamontePage', () => {
  let component: BustamontePage;
  let fixture: ComponentFixture<BustamontePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustamontePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BustamontePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
