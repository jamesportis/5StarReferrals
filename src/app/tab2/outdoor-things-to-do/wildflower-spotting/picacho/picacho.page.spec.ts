import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicachoPage } from './picacho.page';

describe('PicachoPage', () => {
  let component: PicachoPage;
  let fixture: ComponentFixture<PicachoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicachoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PicachoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
