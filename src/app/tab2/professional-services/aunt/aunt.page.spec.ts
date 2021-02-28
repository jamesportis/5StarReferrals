import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuntPage } from './aunt.page';

describe('AuntPage', () => {
  let component: AuntPage;
  let fixture: ComponentFixture<AuntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
