import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoldiesPage } from './goldies.page';

describe('GoldiesPage', () => {
  let component: GoldiesPage;
  let fixture: ComponentFixture<GoldiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoldiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
