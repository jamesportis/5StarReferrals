import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WildflowerSpottingPage } from './wildflower-spotting.page';

describe('WildflowerSpottingPage', () => {
  let component: WildflowerSpottingPage;
  let fixture: ComponentFixture<WildflowerSpottingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildflowerSpottingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WildflowerSpottingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
