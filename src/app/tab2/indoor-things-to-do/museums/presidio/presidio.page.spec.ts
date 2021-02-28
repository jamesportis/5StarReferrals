import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresidioPage } from './presidio.page';

describe('PresidioPage', () => {
  let component: PresidioPage;
  let fixture: ComponentFixture<PresidioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresidioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
