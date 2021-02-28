import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolaiPage } from './solai.page';

describe('SolaiPage', () => {
  let component: SolaiPage;
  let fixture: ComponentFixture<SolaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
