import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaderaPage } from './madera.page';

describe('MaderaPage', () => {
  let component: MaderaPage;
  let fixture: ComponentFixture<MaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaderaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
