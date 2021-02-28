import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimoPage } from './primo.page';

describe('PrimoPage', () => {
  let component: PrimoPage;
  let fixture: ComponentFixture<PrimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
