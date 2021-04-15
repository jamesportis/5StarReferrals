import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuertoPage } from './puerto.page';

describe('PuertoPage', () => {
  let component: PuertoPage;
  let fixture: ComponentFixture<PuertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
