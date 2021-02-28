import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharroPage } from './charro.page';

describe('CharroPage', () => {
  let component: CharroPage;
  let fixture: ComponentFixture<CharroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
