import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThisPage } from './this.page';

describe('ThisPage', () => {
  let component: ThisPage;
  let fixture: ComponentFixture<ThisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
