import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScottPage } from './scott.page';

describe('ScottPage', () => {
  let component: ScottPage;
  let fixture: ComponentFixture<ScottPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScottPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScottPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
