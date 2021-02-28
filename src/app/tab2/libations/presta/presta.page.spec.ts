import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestaPage } from './presta.page';

describe('PrestaPage', () => {
  let component: PrestaPage;
  let fixture: ComponentFixture<PrestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
