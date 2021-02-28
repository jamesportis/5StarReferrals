import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KristinePage } from './kristine.page';

describe('KristinePage', () => {
  let component: KristinePage;
  let fixture: ComponentFixture<KristinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KristinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KristinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
