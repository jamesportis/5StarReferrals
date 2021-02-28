import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToughPage } from './tough.page';

describe('ToughPage', () => {
  let component: ToughPage;
  let fixture: ComponentFixture<ToughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToughPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
