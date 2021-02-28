import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RooseveltPage } from './roosevelt.page';

describe('RooseveltPage', () => {
  let component: RooseveltPage;
  let fixture: ComponentFixture<RooseveltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RooseveltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RooseveltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
