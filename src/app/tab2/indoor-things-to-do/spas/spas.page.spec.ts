import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpasPage } from './spas.page';

describe('SpasPage', () => {
  let component: SpasPage;
  let fixture: ComponentFixture<SpasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
