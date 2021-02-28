import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TugoPage } from './tugo.page';

describe('TugoPage', () => {
  let component: TugoPage;
  let fixture: ComponentFixture<TugoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TugoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
