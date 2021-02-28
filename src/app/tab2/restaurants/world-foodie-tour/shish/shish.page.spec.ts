import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShishPage } from './shish.page';

describe('ShishPage', () => {
  let component: ShishPage;
  let fixture: ComponentFixture<ShishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
