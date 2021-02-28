import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZooPage } from './zoo.page';

describe('ZooPage', () => {
  let component: ZooPage;
  let fixture: ComponentFixture<ZooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
