import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MamasPage } from './mamas.page';

describe('MamasPage', () => {
  let component: MamasPage;
  let fixture: ComponentFixture<MamasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MamasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
