import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HikesPage } from './hikes.page';

describe('HikesPage', () => {
  let component: HikesPage;
  let fixture: ComponentFixture<HikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
