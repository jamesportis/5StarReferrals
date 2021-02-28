import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FineDiningPage } from './fine-dining.page';

describe('FineDiningPage', () => {
  let component: FineDiningPage;
  let fixture: ComponentFixture<FineDiningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineDiningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FineDiningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
