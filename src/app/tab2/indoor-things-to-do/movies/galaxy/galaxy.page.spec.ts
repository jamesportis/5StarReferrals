import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalaxyPage } from './galaxy.page';

describe('GalaxyPage', () => {
  let component: GalaxyPage;
  let fixture: ComponentFixture<GalaxyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalaxyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
