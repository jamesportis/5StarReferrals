import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuralsPage } from './murals.page';

describe('MuralsPage', () => {
  let component: MuralsPage;
  let fixture: ComponentFixture<MuralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
