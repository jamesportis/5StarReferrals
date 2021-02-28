import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SushiPage } from './sushi.page';

describe('SushiPage', () => {
  let component: SushiPage;
  let fixture: ComponentFixture<SushiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SushiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
