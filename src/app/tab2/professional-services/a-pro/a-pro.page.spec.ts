import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AProPage } from './a-pro.page';

describe('AProPage', () => {
  let component: AProPage;
  let fixture: ComponentFixture<AProPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
