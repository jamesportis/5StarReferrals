import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoccoPage } from './rocco.page';

describe('RoccoPage', () => {
  let component: RoccoPage;
  let fixture: ComponentFixture<RoccoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoccoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoccoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
