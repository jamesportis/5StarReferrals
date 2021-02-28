import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChambersPage } from './chambers.page';

describe('ChambersPage', () => {
  let component: ChambersPage;
  let fixture: ComponentFixture<ChambersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChambersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
