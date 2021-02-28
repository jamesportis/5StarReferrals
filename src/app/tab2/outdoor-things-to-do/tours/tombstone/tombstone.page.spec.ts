import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TombstonePage } from './tombstone.page';

describe('TombstonePage', () => {
  let component: TombstonePage;
  let fixture: ComponentFixture<TombstonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombstonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TombstonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
