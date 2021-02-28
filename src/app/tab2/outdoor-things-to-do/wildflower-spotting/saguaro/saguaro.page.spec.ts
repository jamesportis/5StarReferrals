import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaguaroPage } from './saguaro.page';

describe('SaguaroPage', () => {
  let component: SaguaroPage;
  let fixture: ComponentFixture<SaguaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaguaroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaguaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
