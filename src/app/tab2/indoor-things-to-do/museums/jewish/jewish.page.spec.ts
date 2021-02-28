import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JewishPage } from './jewish.page';

describe('JewishPage', () => {
  let component: JewishPage;
  let fixture: ComponentFixture<JewishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JewishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
