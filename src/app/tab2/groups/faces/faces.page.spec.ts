import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacesPage } from './faces.page';

describe('FacesPage', () => {
  let component: FacesPage;
  let fixture: ComponentFixture<FacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
