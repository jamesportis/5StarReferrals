import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParishPage } from './parish.page';

describe('ParishPage', () => {
  let component: ParishPage;
  let fixture: ComponentFixture<ParishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
