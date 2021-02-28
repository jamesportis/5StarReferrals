import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotanicalPage } from './botanical.page';

describe('BotanicalPage', () => {
  let component: BotanicalPage;
  let fixture: ComponentFixture<BotanicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotanicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotanicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
