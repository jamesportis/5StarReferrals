import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidecarPage } from './sidecar.page';

describe('SidecarPage', () => {
  let component: SidecarPage;
  let fixture: ComponentFixture<SidecarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidecarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidecarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
