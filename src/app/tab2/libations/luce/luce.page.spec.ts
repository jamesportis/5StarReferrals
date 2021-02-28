import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucePage } from './luce.page';

describe('LucePage', () => {
  let component: LucePage;
  let fixture: ComponentFixture<LucePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
