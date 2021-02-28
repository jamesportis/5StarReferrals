import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermagonPage } from './termagon.page';

describe('TermagonPage', () => {
  let component: TermagonPage;
  let fixture: ComponentFixture<TermagonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermagonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermagonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
