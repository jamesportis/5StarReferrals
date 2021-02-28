import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TridentPage } from './trident.page';

describe('TridentPage', () => {
  let component: TridentPage;
  let fixture: ComponentFixture<TridentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TridentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TridentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
