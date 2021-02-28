import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeroPage } from './vero.page';

describe('VeroPage', () => {
  let component: VeroPage;
  let fixture: ComponentFixture<VeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
