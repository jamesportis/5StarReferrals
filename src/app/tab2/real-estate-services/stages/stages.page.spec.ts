import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StagesPage } from './stages.page';

describe('StagesPage', () => {
  let component: StagesPage;
  let fixture: ComponentFixture<StagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
