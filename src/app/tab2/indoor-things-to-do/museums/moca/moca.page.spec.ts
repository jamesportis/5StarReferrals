import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MocaPage } from './moca.page';

describe('MocaPage', () => {
  let component: MocaPage;
  let fixture: ComponentFixture<MocaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
