import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrooklynPage } from './brooklyn.page';

describe('BrooklynPage', () => {
  let component: BrooklynPage;
  let fixture: ComponentFixture<BrooklynPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrooklynPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrooklynPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
