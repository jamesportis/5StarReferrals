import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraffitiPage } from './graffiti.page';

describe('GraffitiPage', () => {
  let component: GraffitiPage;
  let fixture: ComponentFixture<GraffitiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraffitiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraffitiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
