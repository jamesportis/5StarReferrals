import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairwayPage } from './fairway.page';

describe('FairwayPage', () => {
  let component: FairwayPage;
  let fixture: ComponentFixture<FairwayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairwayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
