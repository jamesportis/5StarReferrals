import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnightsPage } from './knights.page';

describe('KnightsPage', () => {
  let component: KnightsPage;
  let fixture: ComponentFixture<KnightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
