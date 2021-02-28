import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SosaPage } from './sosa.page';

describe('SosaPage', () => {
  let component: SosaPage;
  let fixture: ComponentFixture<SosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
