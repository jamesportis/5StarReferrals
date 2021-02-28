import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReddingtonPage } from './reddington.page';

describe('ReddingtonPage', () => {
  let component: ReddingtonPage;
  let fixture: ComponentFixture<ReddingtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReddingtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReddingtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
