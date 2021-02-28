import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavayaPage } from './savaya.page';

describe('SavayaPage', () => {
  let component: SavayaPage;
  let fixture: ComponentFixture<SavayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
